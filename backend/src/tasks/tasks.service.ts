import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks-manager.dto';
import { Task } from 'src/schemas/tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  findAll(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId }).exec();
  }

  create(createTaskDto: CreateTaskDto, userId: string) {
    const createdTask = this.taskModel.create({
      ...createTaskDto,
      user: userId,
    });
    return createdTask;
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
  async update(_id: string, task: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(_id, task, { new: true });
  }
}
