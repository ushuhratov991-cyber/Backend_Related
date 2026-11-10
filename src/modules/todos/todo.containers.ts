// writing - соеденяем все независимые слои
import { Router } from "express";
import { DrizzleRepository } from "./todo.repository";
import { TodoService } from "./todo.service";
import { TodoController } from "./todo.controller";
import { createTodoRouter } from "./todo.routes";
function buildTodoRouter(): Router {
  const repository = new DrizzleRepository();
  const service = new TodoService(repository);
  const controller = new TodoController(service);
  return createTodoRouter(controller);
}

export default buildTodoRouter;
