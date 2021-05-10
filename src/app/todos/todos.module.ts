import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';
import { TodosInputComponent } from './components/todos-input/todos-input.component';
import { TodosActionbarComponent } from './components/todos-actionbar/todos-actionbar.component';

@NgModule({
  declarations: [
    TodosShellComponent,
    TodosItemComponent,
    TodosInputComponent,
    TodosActionbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosShellComponent
  ]
})
export class TodosModule { }
