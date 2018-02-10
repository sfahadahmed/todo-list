import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { LocalStorageService } from 'angular-2-local-storage';

import { TodoItem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';

import { MessageService } from './message.service';

@Injectable()
export class TodolistService {

  todoItems: TodoItem[];

  constructor(private localStorageService: LocalStorageService, private messageService: MessageService) {
    //localStorageService.remove('todo-items');
    let value = localStorageService.get('todo-items');
    if(!value || (Array.isArray(value) && value.length == 0)){
      localStorageService.set('todo-items', JSON.stringify(TODOITEMS));
      this.todoItems = TODOITEMS;
    }
    else{
      this.todoItems = JSON.parse(this.localStorageService.get('todo-items'));
    }
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
    this.localStorageService.set('todo-items', JSON.stringify(this.todoItems));
  }

  update(todoItem: TodoItem): void {
    // TODO: find and update existing todo item
    for(var i = 0; i < this.todoItems.length; ++i){
      if(this.todoItems[i].id == todoItem.id){
        this.todoItems[i] = todoItem;
      }
    }

    this.localStorageService.set('todo-items', JSON.stringify(this.todoItems));
  }

  removeAll(): void {
    this.todoItems = [];
    this.localStorageService.remove('todo-items');
  }

  remove(id: number): Observable<TodoItem[]> {
    for(var i = 0; i < this.todoItems.length; ++i){
      if(this.todoItems[i].id == id){
        this.todoItems.splice(i, 1);
        break;
      }
    }

    this.localStorageService.set('todo-items', JSON.stringify(this.todoItems));
    return of(this.todoItems);
  }
}
