import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
import { Todo } from "../model/todo";
import { LocalPersistenceService } from "./local-persistence.service";
import { map } from 'rxjs/operators';

export enum VisibilityFilter {
  All,
  Active,
  Completed
}

@Injectable({
  providedIn: 'root'
})
export class AppState {

  private todosSource = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSource.asObservable();

  hasTodos$: Observable<boolean>;
  activeCount$: Observable<number>;

  filter: VisibilityFilter = VisibilityFilter.All;

  constructor(private persistence: LocalPersistenceService) {
    persistence.getAll().then(todos => {
      this.todosSource.next(todos);
    });

    this.hasTodos$ = this.todos$.pipe( map(todos => todos.length > 0));
    this.activeCount$ = this.todos$.pipe( map(todos =>
      todos.reduce((count, t) => t.completed ? count : count + 1, 0) ));

  }

  async createTodo(title: string) {
    const todo = await this.persistence.create(title);
    this.todosSource.next( [ ...this.todosSource.value, todo] );
  }

  async toggleTodo(id: number) {
    const todos = this.todosSource.value;
    const currentState = (todos.find(t => t.id === id) as Todo).completed;
    const todo = await this.persistence.update(id, { completed: !currentState });
    this.todosSource.next(todos.map(t => t.id === id ? todo : t));
  }

  async removeTodo(id: number) {
    await this.persistence.remove(id);
    this.todosSource.next(this.todosSource.value.filter(t => t.id !== id));
  }
}
