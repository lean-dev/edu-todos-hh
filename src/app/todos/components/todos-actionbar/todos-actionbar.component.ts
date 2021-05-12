import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../model/todo';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'todos-actionbar',
  templateUrl: './todos-actionbar.component.html'
})
export class TodosActionbarComponent {

  public hasTodos$ = this.appState.hasTodos$;
  public activeCount$ = this.appState.activeCount$;
  public hasCompletedTodos$: Observable<boolean>;

  constructor(private appState: AppState) {
    this.hasCompletedTodos$ = appState.todos$.pipe( map(
      todos => todos.findIndex(t => t.completed) !== -1
    ));
  }

}
