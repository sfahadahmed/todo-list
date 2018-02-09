import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistDetailComponent } from './todolist-detail/todolist-detail.component';
import { TodolistService } from './todolist.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { TodolistNewComponent } from './todolist-new/todolist-new.component';
import { TodolistEditComponent } from './todolist-edit/todolist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistDetailComponent,
    MessagesComponent,
    TodolistNewComponent,
    TodolistEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodolistService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
