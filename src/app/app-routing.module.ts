import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { TodolistComponent } from './todolist/todolist.component';
import { TodolistDetailComponent } from './todolist-detail/todolist-detail.component';
import { TodolistNewComponent } from './todolist-new/todolist-new.component';

const routes: Route[] = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: TodolistComponent},
  {path: 'detail/:id', component: TodolistDetailComponent},
  {path: 'new', component: TodolistNewComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
