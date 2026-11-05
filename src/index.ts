import express from "express";
import { pinoHttp } from "pino-http";
// Создание бэкенд приложения. Для "управления" сервером
import postRoutes from "./modules/posts/routes/posts.routes";
import studentsRoutes from "./modules/studentManagmentApp/students/students.routes";
import buildTodoRouter from "./modules/todos/todo.containers";
import buildTaskRouter from "./modules/taskManager/task.containers";
import { logger } from "./utils/logger";
import { customLogger } from "./middleware/custom-logger";
import {privateGuard} from "./middleware/private-guard"
const app = express();
// use - специальный Middleware. Учит сервер понимать JSON(преобразовывать JSON в js обьекты и наоборот)

app.use(express.json());

app.use(pinoHttp({ logger: logger }));

app.use(customLogger);
// Тестовый метод для проверки работы приложения
// get - использование метода запроса GET.
// "/user" - адрес (+ http://localhost:3000)
// (_requset, response) => {
//   response.status(200).json({
//     status: "OK",
//     data: {
//       firstName: "John",
//       lastName: "Johnson",
//       age: 30,
//       job: "Backend Developer",
//     },
//   } - выполняется, когда на адрес идёт запрос
// app.get("/user", (_requset, response) => {
//   response.status(200).json({
//     status: "OK",
//     data: {
//       firstName: "John",
//       lastName: "Johnson",
//       age: 30,
//       job: "Backend Developer",
//     },
//   });
// });
// Порт, через который открывается наше приложение

app.use("/posts", postRoutes);
app.use("/students", studentsRoutes);
app.use("/todos", buildTodoRouter());
app.use("/tasks", buildTaskRouter()); 
app.get("/private", privateGuard, (_request, response) => {
  response
    .status(200)
    .json({ message: "This is private information and you have acceess" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT} http://localhost:${PORT}`);
});
