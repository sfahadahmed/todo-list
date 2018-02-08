import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistNewComponent } from './todolist-new.component';

describe('TodolistNewComponent', () => {
  let component: TodolistNewComponent;
  let fixture: ComponentFixture<TodolistNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
