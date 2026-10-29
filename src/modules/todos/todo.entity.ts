export interface Todo {
    id: string;
    title: string; 
    done: boolean; 
    createdAt: Date; 
}

export interface TodoRepositoryData {
    findAllTodos: () => Promise <Todo[]>;
    createTodo: (title: string) => Promise <Todo>; 
}