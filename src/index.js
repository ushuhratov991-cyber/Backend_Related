const express = require("express");
// Создание бэкенд приложения. Для "управления" сервером
const app = express();
// use - специальный Middleware. Учит сервер понимать JSON(преобразовывать JSON в js обьекты и наоборот)
app.use(express.json());
app.get("/user", (_requset, response) => {
  response.status(200).json({
    status: "OK",
    data: {
      firstName: "John",
      lastName: "Johnson",
      age: 30,
      job: "Backend Developer",
    },
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT} http://localhost:${PORT}`);
});
