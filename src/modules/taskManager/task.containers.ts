import { Router } from "express";
import { DrizzleTaskRepository } from "./task.repository";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";
import { taskRouter } from "./task.routes";

function buildTaskRouter(): Router {
  const repository = new DrizzleTaskRepository();
  const service = new TaskService(repository);
  const controller = new TaskController(service);
  return taskRouter(controller);
}

export default buildTaskRouter;
