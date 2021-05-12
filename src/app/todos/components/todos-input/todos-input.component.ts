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
    const title = this.title.trim();
    if (title) {
      this.create.emit(title);
    }
    this.title = '';
  }
}
