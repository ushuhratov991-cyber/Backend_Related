import { Request, Response } from "express";

import { TodoService } from "./todo.service";

class TodoController {
  constructor(private readonly service: TodoService) {
    this.service = service
  }

  getAllTodos = async(request: Request, response: Response) => {
    const todos = await this.service.getAllTodos(); 
    response.status(200).json(todos);
  }

  createTodo = async(request: Request, response: Response) => {
    const {title} = request.body;

    try {
        const todo = await this.service.createTodo(title);
        response.status(201).json(todo)
    }catch(error) {
        if(error instanceof Error) {
            response.status(400).json({status: 400, message: error.message});
        }
    }
  }
}

export { TodoController };
