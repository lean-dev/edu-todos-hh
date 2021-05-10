import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosActionbarComponent } from './todos-actionbar.component';

describe('TodosActionbarComponent', () => {
  let component: TodosActionbarComponent;
  let fixture: ComponentFixture<TodosActionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosActionbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
