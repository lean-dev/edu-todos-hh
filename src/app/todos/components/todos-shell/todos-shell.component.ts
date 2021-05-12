import { Component } from '@angular/core';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html'
})
export class TodosShellComponent {

  author = 'Micha Alt'
  authorUrl = 'https://github.com/lean-ng';

  constructor(private appState: AppState) {
  }

  createTodo(title: string) {
    this.appState.createTodo(title); // Generates todo and a new(!) todos array
  }
}
