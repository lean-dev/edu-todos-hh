import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-actionbar',
  templateUrl: './todos-actionbar.component.html'
})
export class TodosActionbarComponent {

  @Input()
  todos!: Todo[];
}
