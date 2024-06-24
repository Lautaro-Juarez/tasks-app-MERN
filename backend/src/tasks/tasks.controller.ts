import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks-manager.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
import { AuthenticatedRequest } from 'src/dto/users-manager.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks(@Req() req: AuthenticatedRequest) {
    const userTasksColecction = req.user.userId;
    return this.tasksService.findAll(userTasksColecction);
  }

  @Get(':id')
  async getTask(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTask(
    @Body() createTaskDto: CreateTaskDto,
    @Req() req: AuthenticatedRequest,
  ) {
    const user = req.user;

    try {
      return await this.tasksService.create(createTaskDto, user.userId);
    } catch (error) {
      if (error.code === 11000)
        throw new ConflictException('Task already exists');
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTask(@Param('id') id: string) {
    const task = await this.tasksService.delete(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Put(':id')
  async updateTask(@Param('id') _id: string, @Body() task: UpdateTaskDto) {
    const taskUpdated = await this.tasksService.update(_id, task);
    if (!taskUpdated) throw new NotFoundException('Task not found');
    return taskUpdated;
  }
}
