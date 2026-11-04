export interface Task {
  id: string;
  title: string;
  description?: string;
  done: boolean;
  createdAt: Date;
}

export interface TaskData {
  getAllTasks: () => Promise<Task[]>;
  createTask: (
    title: string,
    description: string,
    done: boolean,
  ) => Promise<Task>;
  getTask: (id: string) => Promise<Task | undefined>;
}
