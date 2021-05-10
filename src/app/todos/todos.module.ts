import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';

@NgModule({
  declarations: [
    TodosShellComponent,
    TodosItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosShellComponent
  ]
})
export class TodosModule { }
