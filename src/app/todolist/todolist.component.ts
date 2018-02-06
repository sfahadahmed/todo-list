import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitem'
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoItems: TodoItem[];
  selectedTodoItem: TodoItem;

  constructor(private todoListService: TodolistService) { }

  ngOnInit() {
    this.getData();
  }

  onSelect(todoItem: TodoItem): void {
    this.selectedTodoItem = todoItem;
  }

  getData(): void {
    this.todoItems = this.todoListService.getData();
  }

}
