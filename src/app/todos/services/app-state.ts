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

  async toggleTodo(id: number) {
    const currentState = (this.todos.find(t => t.id === id) as Todo).completed;
    const todo = await this.persistence.update(id, { completed: !currentState });
    this.todos = this.todos.map(t => t.id === id ? todo : t);
  }

  async removeTodo(id: number) {
    await this.persistence.remove(id);
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
