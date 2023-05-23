import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = [
    {
      taskName: 'Pay CC Bill',
      priority: 'Medium',
      dueDate: new Date('2023-05-01'),
    },
    {
      taskName: 'Wash Clothes',
      priority: 'High',
      dueDate: new Date('2023-05-01'),
    },
    {
      taskName: 'Collect cash',
      priority: 'High',
      dueDate: new Date('2023-05-01'),
    },
  ];

  taskAdded = new EventEmitter<{ name: string; status: string }>();

  addTask(taskName: string, priority: string, dueDate: Date) {
    this.tasks.push({
      taskName: taskName,
      priority: priority,
      dueDate: dueDate,
    });
  }

  getTasks() {
    return this.tasks;
  }
}
