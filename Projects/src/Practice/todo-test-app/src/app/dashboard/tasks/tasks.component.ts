import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

import { Task } from 'src/model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private tasksService: TasksService, private router: Router) {}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

  addNewTask(): void {
    this.router.navigate(['/add-new-task']);
  }

  onNotify($event: string): any {
    console.log(`In Tasks Component : ${$event}`);
  }
}
