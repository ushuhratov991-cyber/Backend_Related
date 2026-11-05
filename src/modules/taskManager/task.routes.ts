import { Router } from "express";
import { TaskController } from "./task.controller";
const taskRouter = (controller: TaskController) => {
  const router = Router();
  router.get("/", controller.getAllTasks);
  router.get("/:id", controller.getTask);
  router.post("/", controller.createTask);
  return router;
};

export { taskRouter };
