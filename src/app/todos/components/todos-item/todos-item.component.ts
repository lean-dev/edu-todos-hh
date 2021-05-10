import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {

  @Input()
  todo!: Todo;

  @Output()
  remove = new EventEmitter<void>();

  toggleCompletedState(): void {
    // Problem: who calls the backend??
    this.todo.completed = !this.todo.completed;
  }

  deleteTodo(): void {
    // No chance to delete myself ...
    this.remove.emit();
  }
}
