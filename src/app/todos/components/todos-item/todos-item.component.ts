import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {

  @Input()
  todo!: Todo;

  constructor(private appState: AppState) {}

  toggleCompletedState(): void {
    this.appState.toggleTodo(this.todo.id);
  }

  deleteTodo(): void {
    this.appState.removeTodo(this.todo.id);
  }
}
