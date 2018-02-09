import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoItem } from '../todoitem'
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoItems: TodoItem[];
  //selectedTodoItem: TodoItem;

  constructor(private todoListService: TodolistService, private routerModule: RouterModule) { }

  ngOnInit() {
    this.getData();
  }

  /*onSelect(todoItem: TodoItem): void {
    this.selectedTodoItem = todoItem;
  }*/

  getData(): void {
    this.todoListService.getData().
      subscribe(todoItems => this.todoItems = todoItems);
  }

  removeAll(): void {
    this.todoListService.removeAll();
    this.getData();
  }
}
