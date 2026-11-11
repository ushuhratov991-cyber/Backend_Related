import { Request, Response } from "express";

import { UsersService } from "./users.service";

class UsersController {
  constructor(private readonly service: UsersService) {
    this.service = service;
  }

  findByEmail = async (request: Request, response: Response) => {
    const findUserByEmail = request.params.email;

    if (typeof findUserByEmail !== "string") {
      response.status(400).json({ code: 400, message: "Invalid Email!" });
      return;
    }

    const userByEmail = await this.service.findByEmail(findUserByEmail);
    response.status(201).json(userByEmail);
  };

  create = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const createUser = await this.service.create(email, password);
    response.status(200).json(createUser);

    if (!createUser) {
      response
        .status(404)
        .json({ code: 404, message: "Email or Password should be filled" });
      return;
    }
  };

  deleteUser = async (request: Request, response: Response) => {
    const deleteUserById = request.params.id;

    if (typeof deleteUserById !== "string") {
      response.status(400).json({ code: 400, message: "Invalid User ID" });
      return;
    }

    const deleteById = await this.service.deleteUser(deleteUserById);
    response.status(201).json(deleteById);
  };
}

export { UsersController };
