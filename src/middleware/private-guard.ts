import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
export const privateGuard = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = request.headers.authorization;
  logger.warn("Private Guard middleware - check");
  if (token !== "qwerty007") {
    return response.status(401).json({ code: 401, error: "Unauthorized" });
  }
  next();
};
