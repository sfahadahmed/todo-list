import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { TodoItem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';


@Injectable()
export class TodolistService {

  constructor() { }

  getData(): Observable<TodoItem[]> {
    return of(TODOITEMS);
  }

}
