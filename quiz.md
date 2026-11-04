На примере приложения todos распишите что делает каждый файл в папке todo, какую роль выполняет тот или иной класс

1) Todo entitity - is the entity interface  that response for typesation startpoint of the entire programm.

2) Todo repository - is responsible for finding all todos and  creating a todo list with unique id. 

3) Todo service - is mostly working frontent part, and also reacts to user's response. 

4) Todo controller - is resposible for (request, response and error). Todo controller is about sending answer from backend to the frontent. 

5) Todo routes - controls and seperates two funcions(getAllTodos, createTodo) routes. So then we get two independenent routes.

6) Todo container - here we are importing 4 classes (expept entity) and calling out that classes inside a function called buildTodoRouter. And buildTodoRouter is used in index.ts similar as App.tsx. 