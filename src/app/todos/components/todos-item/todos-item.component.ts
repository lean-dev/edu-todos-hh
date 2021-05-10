import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {

  @Input()
  todo!: Todo;

  toggleCompletedState(): void {
    // Problem: who calls the backend??
    this.todo.completed = !this.todo.completed;
  }
}
