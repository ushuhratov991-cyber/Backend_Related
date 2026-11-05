import { Request, Response } from "express";

import { TaskService } from "./task.service";

class TaskController {
  constructor(private readonly service: TaskService) {
    this.service = service;
  }

  getAllTasks = async (_request: Request, response: Response) => {
    const tasks = await this.service.getAllTasks();
    response.status(200).json(tasks);
  };

  getTask = async (request: Request, response: Response) => {
    const id = request.params.id;

    if (typeof id !== "string") {
      response.status(400).json({ code: 400, message: "Invalid task ID" });
      return;
    }

    const getTaskById = await this.service.getTask(id);
    response.status(200).json(getTaskById);
  };

  createTask = async (request: Request, response: Response) => {
    const { title, description, done } = request.body;

    try {
      const task = await this.service.createTask(
        title,
        description ?? "",
        done ?? false,
      );
      response.status(201).json(task);
    } catch (error) {
      if (error instanceof Error) {
        response.status(404).json({ code: 404, message: error.message });
      }
    }
  };
}

export { TaskController };
