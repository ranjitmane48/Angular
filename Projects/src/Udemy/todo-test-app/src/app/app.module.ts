import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './dashboard/tasks/task/task.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { CreateTaskComponent } from './dashboard/tasks/create-task/create-task.component';
import { CreateTaskListComponent } from './dashboard/tasks/create-task-list/create-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    TasksComponent,
    TaskComponent,
    CreateTaskComponent,
    CreateTaskListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
