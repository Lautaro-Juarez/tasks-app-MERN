import { Body, ConflictException, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/dto/users-manager.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}


  @Get()
  async getAllUsers() {
    return await this.userService.findAll();
  }
}
