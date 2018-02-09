import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoItem } from '../todoitem'
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolist-edit',
  templateUrl: './todolist-edit.component.html',
  styleUrls: ['./todolist-edit.component.css']
})
export class TodolistEditComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor(private route: ActivatedRoute, private location: Location, private todoListService: TodolistService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoListService.getDataById(id).
      subscribe(todoItem => this.todoItem = todoItem);
  }

  update(): void {
    this.todoListService.update(this.todoItem);
    this.location.back();
  }
}
