import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TodoItem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';

import { MessageService } from './message.service';

@Injectable()
export class TodolistService {

  constructor(private messageService: MessageService) { }

  getData(): Observable<TodoItem[]> {
    this.messageService.add('TodolistService: fetching data');
    return of(TODOITEMS);
  }

  getDataById(id: number): Observable<TodoItem>{
    this.messageService.add(`TodolistService: fetched  id=${id}`);
    return of(TODOITEMS.find(todoItem => todoItem.id === id));
  }

}
