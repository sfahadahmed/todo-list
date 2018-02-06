import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitem'
import { TODOITEMS } from '../mock-todoitems'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoItems = TODOITEMS;
  selectedTodoItem: TodoItem;

  constructor() { }

  ngOnInit() {
  }

  onSelect(todoItem: TodoItem): void {
    this.selectedTodoItem = todoItem;
  }

}
