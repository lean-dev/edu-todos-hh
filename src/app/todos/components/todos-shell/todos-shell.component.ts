import { Component } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html'
})
export class TodosShellComponent {

  author = 'Micha Alt';
  authorUrl = 'https://github.com/lean-ng';

  todos: Todo[] = [];
}
