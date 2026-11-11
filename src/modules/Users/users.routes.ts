import { Router } from "express";

import { UsersController } from "./users.controller";

const usersRouter = (controller: UsersController) => {
  const router = Router();

  router.post("/", controller.create);
  router.get("/:email", controller.findByEmail);
  router.delete("/:id", controller.deleteUser);
  return router;
};

export { usersRouter };
