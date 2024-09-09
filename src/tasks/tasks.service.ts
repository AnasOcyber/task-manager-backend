import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return { id, updateTaskDto };
  }

  delete(id: number) {
    return id;
  }
}
