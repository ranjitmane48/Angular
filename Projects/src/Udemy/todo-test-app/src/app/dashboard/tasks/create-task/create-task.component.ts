import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  taskName: string = '';
  priority: string = '';
  dueDate: Date | undefined;

  createTask(): void {
    console.log(
      `Task is created with task name : ${this.taskName} , priority : ${this.priority}, due date : ${this.dueDate}`
    );
  }
}
