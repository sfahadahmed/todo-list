import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TodoItem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';

import { MessageService } from './message.service';

@Injectable()
export class TodolistService {

  todoItems: TodoItem[];

  constructor(private messageService: MessageService) {
    this.todoItems = TODOITEMS;
  }

  getData(): Observable<TodoItem[]> {
    this.messageService.add('TodolistService: fetching data');
    return of(this.todoItems);
  }

  getDataById(id: number): Observable<TodoItem>{
    this.messageService.add(`TodolistService: fetched  id=${id}`);
    return of(this.todoItems.find(todoItem => todoItem.id === id));
  }

  save(todoItem: TodoItem): void {

    // assign the max id available
    let maxId: number = -1;
    if(this.todoItems.length > 0)
      maxId = this.todoItems[0].id;

    for(let i = 0; i < this.todoItems.length; ++i){
      if(this.todoItems[i].id > maxId){
        maxId = this.todoItems[i].id;
      }
    }

    todoItem.id = maxId+1;
    this.todoItems.push(todoItem);
  }

  update(todoItem: TodoItem): void {
    // TODO: find and update existing todo item
    for(var i = 0; i < this.todoItems.length; ++i){
      if(this.todoItems[i].id == todoItem.id){
        this.todoItems[i] = todoItem;
      }
    }
  }

  removeAll(): void {
    this.todoItems = [];
  }

  remove(id: number): Observable<TodoItem[]> {
    for(var i = 0; i < this.todoItems.length; ++i){
      if(this.todoItems[i].id == id){
        this.todoItems.splice(i, 1);
        break;
      }
    }

    return of(this.todoItems);
  }
}
