import { EventEmitter, Injectable } from '@angular/core';
import { Task } from 'src/model/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [
    {
      taskName: 'Pay CC Bill',
      priority: 'Medium',
      dueDate: new Date('2023-05-01'),
      noOfDays: 4,
    },
    {
      taskName: 'Wash Clothes',
      priority: 'High',
      dueDate: new Date('2023-05-01'),
      noOfDays: 5,
    },
    {
      taskName: 'Collect cash',
      priority: 'High',
      dueDate: new Date('2023-05-01'),
      noOfDays: 6,
    },
  ];

  taskAdded = new EventEmitter<{ name: string; status: string }>();

  addTask(taskName: string, priority: string, dueDate: Date, noOfDays = 10) {
    this.tasks.push({
      taskName: taskName,
      priority: priority,
      dueDate: dueDate,
      noOfDays: noOfDays,
    });
  }

  getTasks() {
    return this.tasks;
  }
}
