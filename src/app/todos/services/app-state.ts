import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LocalPersistenceService } from "./local-persistence.service";

export enum VisibilityFilter {
  All,
  Active,
  Completed
}

@Injectable({
  providedIn: 'root'
})
export class AppState {

  todos: Todo[] = [];
  filter: VisibilityFilter = VisibilityFilter.All;

  constructor(private persistence: LocalPersistenceService) {
    persistence.getAll().then(todos => {
      this.todos = todos;
    });
  }

  async createTodo(title: string) {
    const todo = await this.persistence.create(title);
    this.todos = [ ...this.todos, todo];
  }
}
