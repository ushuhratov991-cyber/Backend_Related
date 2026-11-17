import { Router } from "express";

import UsersController from "./users.controller";

export function createUserRouter(controller: UsersController): Router {
  const router = Router();
  router.post("/register", controller.registerUser);
  router.post("login", controller.loginUser);

  return router;
}
