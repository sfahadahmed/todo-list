import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoItem } from '../todoitem'
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolist-new',
  templateUrl: './todolist-new.component.html',
  styleUrls: ['./todolist-new.component.css']
})
export class TodolistNewComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor(private route: ActivatedRoute, private location: Location, private todoListService: TodolistService) { }

  ngOnInit() {
    this.todoItem = new TodoItem();
  }

  save(): void{
    this.todoListService.save(this.todoItem);
    this.location.back();
  }
}
