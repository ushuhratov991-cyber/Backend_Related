import { v4 } from "uuid";

import { Todo, TodoRepositoryData } from "./todo.entity";

class TodoRepository implements TodoRepositoryData {
  private store: Todo[] = [];

  async findAllTodos(): Promise<Todo[]> {
    return this.store;
  }

  async createTodo(title: string): Promise<Todo> {
    const todo: Todo = {
        id: v4(),
        title,
        done: false,
        createdAt:  new Date()
    }
    this.store.push(todo);

    return todo; 
  }
}

export { TodoRepository };