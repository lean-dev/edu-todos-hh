import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../../model/todo';

import { TodosItemComponent } from './todos-item.component';

const todoMock: Todo = {
  id: 42,
  title: 'Unit Testing',
  completed: false
}

describe('TodosItemComponent', () => {
  let component: TodosItemComponent;
  let fixture: ComponentFixture<TodosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosItemComponent);
    component = fixture.componentInstance;
    component.todo = todoMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
