import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosInputComponent } from '../todos-input/todos-input.component';

import { TodosShellComponent } from './todos-shell.component';

describe('TodosShellComponent', () => {
  let component: TodosShellComponent;
  let fixture: ComponentFixture<TodosShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosShellComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
