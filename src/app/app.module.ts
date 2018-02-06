import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistDetailComponent } from './todolist-detail/todolist-detail.component';
import { TodolistService } from './todolist.service';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
