import { Component } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html'
})
export class TodosShellComponent {

  private nextId = 1;

  author = 'Micha Alt';
  authorUrl = 'https://github.com/lean-ng';

  todos: Todo[] = [];

  createTodo(title: string) {
    this.todos.push({ id: this.nextId++, title, completed: false });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
