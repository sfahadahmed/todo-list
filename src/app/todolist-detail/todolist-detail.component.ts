import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../todoitem'

@Component({
  selector: 'app-todolist-detail',
  templateUrl: './todolist-detail.component.html',
  styleUrls: ['./todolist-detail.component.css']
})
export class TodolistDetailComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
