import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Persistence } from './persistence';

@Injectable({
  providedIn: 'root'
})
export class LocalPersistenceService implements Persistence {

  async getAll(): Promise<Todo[]> {
    return this._getTodos();
  }

  async create(title: string): Promise<Todo> {
    const todos = this._getTodos();
    const todo: Todo = { id: this._nextId(), title, completed: false };
    todos.push(todo);
    this._saveTodos(todos);
    return todo;
  }

 async update(id: number, changes: Partial<Todo>): Promise<Todo> {
    const todos = this._getTodos();
    const todo = todos.find(t => t.id === id) as Todo;
    Object.assign(todo, changes);
    this._saveTodos(todos);
    return todo;
  }

  async remove(id: number): Promise<void> {
    const todos = this._getTodos();
    this._saveTodos(todos.filter(t => t.id !== id));
  }

  private _getTodos(): Todo[] {
    return JSON.parse(localStorage.todos || '[]');
  }

  private _saveTodos(todos: Todo[]): void {
    localStorage.todos = JSON.stringify(todos);
  }

  private _nextId(): number {
    const nextId = JSON.parse(localStorage.lastId || '0') + 1;
    localStorage.lastId = nextId;
    return nextId;
  }
}
