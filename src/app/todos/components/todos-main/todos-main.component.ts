import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-main',
  templateUrl: './todos-main.component.html'
})
export class TodosMainComponent {

  @Input()
  todos!: Todo[];
}
