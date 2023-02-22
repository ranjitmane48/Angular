import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerRegisterComponent } from './server-register/server-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    ServerRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
