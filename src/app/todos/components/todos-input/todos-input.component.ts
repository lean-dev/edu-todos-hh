import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todos-input',
  templateUrl: './todos-input.component.html'
})
export class TodosInputComponent {

  title = '';

  @Output()
  create = new EventEmitter<string>();

  createTodo(): void {
    this.create.emit(this.title);
    this.title = '';
  }
}
