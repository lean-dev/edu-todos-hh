import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../model/todo';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html'
})
export class TodosShellComponent implements DoCheck {

  author = 'Micha Alt'
  authorUrl = 'https://github.com/lean-ng';

  todos: Todo[];

  constructor(private appState: AppState) {
    this.todos = appState.todos; // Initially empty
  }

  ngDoCheck(): void {
    if (this.appState.todos !== this.todos) {
      this.todos = this.appState.todos;
    }
  }

  createTodo(title: string) {
    this.appState.createTodo(title); // Generates todo and a new(!) todos array
  }
}
