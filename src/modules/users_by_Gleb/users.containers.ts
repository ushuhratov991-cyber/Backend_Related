import router from "../posts/routes/posts.routes";
import { DrizzleUserRepository } from "./users.repository";
import UserService from "./users.service";
import UserController from "./users.controller";
import { createUserRouter } from "./users.routes";
import { Router } from "express";

function usersContainers(): Router {
  const repository = new DrizzleUserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);
  return createUserRouter(controller);
}

export default usersContainers;