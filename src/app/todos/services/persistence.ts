import { Todo } from "../model/todo";

export interface Persistence {

  getAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
  update(id: number, changes: Partial<Todo>): Promise<Todo>;
  remove(id: number): Promise<void>;

}
