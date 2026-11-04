import {Task, TaskData} from "./task.entity";

class TaskService {
  constructor(private readonly repo: TaskData) {
    this.repo = repo;
  }

  findAllTasks(): Promise<Task[]> {
    return this.repo.getAllTasks();
  }

  getTask(id: string): Promise<Task | undefined> {
    return this.repo.getTask(id);
  }

  createTask(
    title: string,
    description: string,
    done: boolean,
  ): Promise<Task | undefined> {
    
    if(!title) {
        throw new Error("Title is required!")
    }
    return this.repo.createTask(title,description,done);
  }

}

export { TaskService };