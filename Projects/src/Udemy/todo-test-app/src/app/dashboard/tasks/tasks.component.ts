import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private tasksService: TasksService, private router: Router) {}

  tasks: { taskName: string; priority: string; dueDate: Date }[] = [];

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

  addNewTask(): void {
    this.router.navigate(['/add-new-task']);
  }
}
