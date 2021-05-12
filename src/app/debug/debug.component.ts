import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../todos/model/todo';
import { AppState } from '../todos/services/app-state';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebugComponent {

  todos$: Observable<string[]>;

  // todos: string[] = [];

  constructor(private appState: AppState, cdRef: ChangeDetectorRef) {

    // this.appState.todos$.pipe(map(todos => todos.map(t => t.title)))
    //   .subscribe(titles => {this.todos = titles; cdRef.markForCheck();} );

    this.todos$ =
      this.appState.todos$.pipe(map(todos => todos.map(t => t.title)));

  }



}
