import { Router } from "express";
import {DrizzleUserRepository} from "./users.repository"; 
import {UsersService} from "./users.service"; 
import {UsersController} from "./users.controller"; 
import {usersRouter} from "./users.routes"; 

function buildUsersRouter(): Router {
    const repository = new DrizzleUserRepository(); 
    const service = new UsersService(repository); 
    const controller = new UsersController(service); 
    return usersRouter(controller); 

}

export default buildUsersRouter;