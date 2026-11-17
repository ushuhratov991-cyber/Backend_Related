import { Request, Response } from "express";

import UsersService from "./users.service";

class UsersController {
  constructor(private readonly service: UsersService) {}

  registerUser = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
      const result = await this.service.registerUser(email, password);
      response.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).json({ code: 400, message: error.message });
      }
    }
  };

  loginUser = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
      const result = await this.service.login(email, password);
      response.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).json({ code: 400, message: error.message });
      }
    }
  };
}

export default UsersController;
