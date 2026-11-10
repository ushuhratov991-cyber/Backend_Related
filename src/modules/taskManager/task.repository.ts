import { eq } from "drizzle-orm";
import { db } from "../../db";
import { tasks } from "../../db/schema/taskManager";
import { Task, TaskData } from "./task.entity";

class DrizzleTaskRepository implements TaskData {
  async getAllTasks(): Promise<Task[]> {
    return await db.select().from(tasks);
  }

  async createTask(
    title: string,
    description: string,
    done: boolean = false,
  ): Promise<Task> {
    const newTask = { title, description, done };

    const [createTask] = await db.insert(tasks).values(newTask).returning();

    return createTask;
  }

  //?============================================================================================================================================================

  async getTask(id: string): Promise<Task | undefined> {
    const [taskById] = await db.select().from(tasks).where(eq(tasks.id, id));

    return taskById;
  }

  //*============================================================================================================================================================

  async updateTask(
    id: string,
    title?: string,
    description?: string,
    done?: boolean,
  ): Promise<Task | undefined> {
    const newValues = { id, title, description, done };

    const [bookUpdate] = await db
      .update(tasks)
      .set(newValues)
      .where(eq(tasks.id, id))
      .returning();

    return bookUpdate;
  }

  //!============================================================================================================================================================

  async deleteTask(id: string): Promise<Task | undefined> {
    const [taskDelete] = await db
      .delete(tasks)
      .where(eq(tasks.id, id))
      .returning();

    return taskDelete;
  }
}

export { DrizzleTaskRepository };

//==============================================================================================================================================================
//?Before integrating Data Base
//!==============================================================================================================================================================

// import { Task, TaskData } from "./task.entity";

// import { v4 } from "uuid";

// class TaskRepository implements TaskData {
//   private taskStore: Task[] = [];

//   async getAllTasks(): Promise<Task[]> {
//     return { ...this.taskStore };
//   }

//   async getTask(id: string): Promise<Task | undefined> {
//     return this.taskStore.find((task) => task.id === id);
//   }

//   async createTask(
//     title: string,
//     description: string,
//     done: boolean = false,
//   ): Promise<Task> {
//     const task: Task = {
//       id: v4(),
//       title,
//       description,
//       done,
//       createdAt: new Date(),
//     };

//     this.taskStore.push(task);
//     return task;
//   }

//   async updateTask(
//     id: string,
//     title?: string,
//     description?: string,
//     done?: boolean,
//   ): Promise<Task | undefined> {
//     const updateTask = this.taskStore.find((task) => task.id === id);

//     if (!updateTask) {
//       return undefined;
//     }

//     if (title !== undefined) {
//       updateTask.title = title;
//     }

//     if (description !== undefined) {
//       updateTask.description = description;
//     }

//     if (done !== undefined) {
//       updateTask.done = done;
//     }

//     return updateTask;
//   }

//   async deleteTask(id: string): Promise<Task | undefined> {
//     // findIndex вернёт -1, если задача не найдена
//     const taskIndex = this.taskStore.findIndex((task) => task.id === id);

//     if (taskIndex === -1) {
//       return undefined;
//     }

//     // splice вырезает 1 элемент с позиции taskIndex и возвращает массив вырезанных
//     const [deletedTask] = this.taskStore.splice(taskIndex, 1);

//     return deletedTask;
//   }
// }

// export { TaskRepository };
