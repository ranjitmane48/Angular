import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input()
  task: Task = {
    taskName: '',
    priority: '',
    dueDate: new Date(),
    noOfDays: 1,
  };

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  onViewTaskDetailsClicked(): any {
    this.notify.emit(this.task.taskName);
    console.log('button is clicked!');
  }
}
