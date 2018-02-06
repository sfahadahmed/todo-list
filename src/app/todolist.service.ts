import { Injectable } from '@angular/core';


import { TodoItem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';


@Injectable()
export class TodolistService {

  constructor() { }

  getData(): TodoItem[] {
    return TODOITEMS;
  }

}
