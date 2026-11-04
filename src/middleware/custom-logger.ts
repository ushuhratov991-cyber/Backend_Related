import { Request, Response, NextFunction } from "express";
export const customLogger = (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  const method = request.method;
  const url = request.url;
  console.log(`${method} - ${url}`);
  // Функция next не позволяет остановить процесс после того, как сработал middleware,
  // если ее не использовать, то клиент не получит ответ
  next();
};
