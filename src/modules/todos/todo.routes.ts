// Здесь только маршрутизация
import { Router } from "express";
import { TodoController } from "./todo.controller";
const createTodoRouter = (controller: TodoController) => {
  const router = Router();
  router.get("/", controller.getAllTodos);
  router.post("/", controller.createTodo);
  return router;
};
export { createTodoRouter };
