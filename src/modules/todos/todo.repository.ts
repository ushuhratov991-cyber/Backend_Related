import { db } from "../../db";
import { todos } from "../../db/schema/todos";
import { Todo, TodoRepositoryData } from "./todo.entity";

//Repository after drizzle ORM

class DrizzleRepository implements TodoRepositoryData {
  async findAllTodos(): Promise<Todo[]> {
    return await db.select().from(todos);
  }

  async createTodo(title: string): Promise<Todo> {
    const newTodo = {
      title,
    };

    const [todo] = await db.insert(todos).values(newTodo).returning();

    return todo;
  }
}

export { DrizzleRepository };
//!==============================================================================================================================================================
//?Before integrating Data Base
//!==============================================================================================================================================================
// import { v4 } from "uuid";

// import { Todo, TodoRepositoryData } from "./todo.entity";

// class TodoRepository implements TodoRepositoryData {
//   private store: Todo[] = [];

//   async findAllTodos(): Promise<Todo[]> {
//     return this.store;
//   }

//   async createTodo(title: string): Promise<Todo> {
//     const todo: Todo = {
//         id: v4(),
//         title,
//         done: false,
//         createdAt:  new Date()
//     }
//     this.store.push(todo);

//     return todo;
//   }
// }

// export { TodoRepository };
