import { Task, TaskData } from "./task.entity";

import { v4 } from "uuid";

class TaskRepository implements TaskData {
  private taskStore: Task[] = [];

  async getAllTasks(): Promise<Task[]> {
    return { ...this.taskStore };
  }

  async getTask(id: string): Promise<Task | undefined> {
    return this.taskStore.find((task) => task.id === id);
  }

  async createTask(
    title: string,
    description: string,
    done: boolean = false,
  ): Promise<Task> {
    const task: Task = {
      id: v4(),
      title,
      description,
      done,
      createdAt: new Date(),
    };

    this.taskStore.push(task);
    return task;
  }
}

export { TaskRepository };
