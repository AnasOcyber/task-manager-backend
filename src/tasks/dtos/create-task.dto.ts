import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly isCompleted: boolean;
}
