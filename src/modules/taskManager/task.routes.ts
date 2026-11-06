import { Router } from "express";
import { TaskController } from "./task.controller";
const taskRouter = (controller: TaskController) => {
  const router = Router();
  router.get("/", controller.getAllTasks);
  router.get("/:id", controller.getTask);
  router.post("/", controller.createTask);
  router.patch("/:id", controller.updateTask);
  router.delete("/:id", controller.deleteTask);
  return router;
};

export { taskRouter };
