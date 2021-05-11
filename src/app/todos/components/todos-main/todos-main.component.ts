import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-main',
  templateUrl: './todos-main.component.html'
})
export class TodosMainComponent{

  @Input()
  todos!: Todo[];

  removeTodo(id: number) {
    // Problem 1: who calls the backend??
    const ix = this.todos.findIndex(t => t.id === id);
    this.todos.splice(ix, 1);
    // Bug: creates a new todos array in subtree
    // this.todos = this.todos.filter(t => t.id !== id);
  }
}
