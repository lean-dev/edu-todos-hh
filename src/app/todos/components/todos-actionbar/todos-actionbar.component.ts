import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-actionbar',
  templateUrl: './todos-actionbar.component.html'
})
export class TodosActionbarComponent {

  @Input()
  todos!: Todo[];

  // Bad practices: recalculating on every change detection run

  get hasTodos(): boolean {
    return this.todos.length > 0;
  }

  get activeCount(): number {
    return this.todos.reduce((count, t) => t.completed ? count : count + 1, 0);
  }
}
