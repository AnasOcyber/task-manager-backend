import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}
