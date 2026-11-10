import { Task, TaskData } from "./task.entity";

class TaskService {
  constructor(private readonly repo: TaskData) {
    this.repo = repo;
  }

  getAllTasks(): Promise<Task[]> {
    return this.repo.getAllTasks();
  }

  createTask(title: string, description: string, done: boolean): Promise<Task> {
    if (!title) {
      throw new Error("Title is required!");
    }
    return this.repo.createTask(title, description, done);
  }

  getTask(id: string): Promise<Task | undefined> {
    return this.repo.getTask(id);
  }

  updateTask(
    id: string,
    title?: string,
    description?: string,
    done?: boolean,
  ): Promise<Task | undefined> {
    if (!id) {
      throw new Error("ID is required");
    }

    return this.repo.updateTask(id, title, description, done);
  }

  deleteTask(id: string): Promise<Task | undefined> {
    if (!id) {
      throw new Error("ID is required");
    }

    return this.repo.deleteTask(id);
  }
}

export { TaskService };
