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
import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add-new-task', component: CreateTaskComponent },
  { path: 'add-new-task-list', component: CreateTaskListComponent },
  { path: 'not-found', component: PathNotFoundComponent },
  { path: '', redirectTo: 'not-found', pathMatch: 'full' },
];

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
    PathNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
