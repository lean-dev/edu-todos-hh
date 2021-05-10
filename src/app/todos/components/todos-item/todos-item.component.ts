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

}
