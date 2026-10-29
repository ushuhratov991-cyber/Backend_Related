//contains business logic
// does NOT work with req, resp;

import { Todo, TodoRepositoryData } from "./todo.entity";

class TodoService {
  constructor(private readonly repo: TodoRepositoryData) {
    this.repo = repo;
  }

  getAllTodos(): Promise<Todo[]> {
    return this.repo.findAllTodos()
  }

  createTodo (title: string) {
    if (!title) {
        throw new Error("Title is required")
    }

    return this.repo.createTodo(title)
  }
}

export { TodoService };
