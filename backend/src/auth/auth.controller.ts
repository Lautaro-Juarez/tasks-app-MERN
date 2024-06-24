import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { sign } from 'crypto';
import { LoginDto, RegisterDto } from 'src/dto/users-manager.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  signupUser(@Body() user: RegisterDto) {
    return this.authService.register(user)

  }
  @Post('login')
  signinUser(@Body() user: LoginDto) {
    return this.authService.login(user)
  }
}
