import { Component } from '@angular/core';
import { Todo } from '../../model/todo';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html'
})
export class TodosShellComponent {

  private nextId = 1;

  author = 'Micha Alt';
  authorUrl = 'https://github.com/lean-ng';

  todos: Todo[] = [];

  constructor(private appState: AppState) {}

  createTodo(title: string) {
    this.todos.push({ id: this.nextId++, title, completed: false });
  }
}
