//data transfer object - get from client
import { IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsBoolean()
  @IsOptional()
  readonly done?: boolean;

  @IsString()
  userId: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
