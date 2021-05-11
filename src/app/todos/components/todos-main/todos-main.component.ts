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
    // Problem: who calls the backend??
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
