import { Component } from '@angular/core';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'todos-main',
  templateUrl: './todos-main.component.html'
})
export class TodosMainComponent {

  todos$ = this.appState.todos$;
  hasTodos$ = this.appState.hasTodos$;

  constructor(private appState: AppState) {}


}
