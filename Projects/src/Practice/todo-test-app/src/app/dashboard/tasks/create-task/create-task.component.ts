import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  taskName: string = '';
  priority: string = '';
  dueDate: Date = new Date();

  constructor(private tasksService: TasksService, private router: Router) {}

  addTask(): void {
    this.tasksService.addTask(this.taskName, this.priority, this.dueDate);
    console.log(
      `Task is created with task name : ${this.taskName} , priority : ${this.priority}, due date : ${this.dueDate}`
    );
    this.router.navigate(['/']);
  }
}
