import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-taks.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilter(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks: Task[] = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task: Task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task: Task) => {
  //       task.title.includes(search);
  //       task.description.includes(search);
  //     });
  //   }

  //   return tasks;
  // }

  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task: Task) => task.id === id);

  //   if (!found) {
  //     throw new NotFoundException(`Task with ID: "${id}" not found`);
  //   }

  //   return found;
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv1(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);
  //   return task;
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task: Task) => task.id !== found.id);
  // }
}
