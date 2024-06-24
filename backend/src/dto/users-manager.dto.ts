import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
export class RegisterDto extends LoginDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}