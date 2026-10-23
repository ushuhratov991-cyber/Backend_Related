import { response, Router } from "express";
import { v4 } from "uuid";

import { Post } from "../types";
import { request } from "node:http";
import { lstat } from "node:fs";

const router = Router();

const posts: Post[] = [
  {
    id: v4(),
    firstName: "John",
    lastName: "Johnshon",
    title: "Weather",
    text: "It is dark again!!!",
  },
  {
    id: v4(),
    firstName: "Brayan",
    lastName: "Johnshon",
    title: "Job",
    text: "I've got a new job!",
  },
];

router.get("/", (_request, response) => {
  response.status(200).json(posts);
});

router.get("/:id", (request, response) => {
  // path params
  // params - обьект с параметрами запроса
  // {id} - деструктуризация обьекта params
  const { id }: any = request.params;
  const findedPost = posts.find((post) => post.id === id);
  if (!findedPost) {
    response
      .status(404)
      .json({ code: 404, message: `Post with id ${id} not found` });
  } else {
    response.status(200).json(findedPost);
  }
});

export default router;

router.post("/", (_request, response) => {
  const { firstName, lastName, title, text }: Post = _request.body;

  if (!firstName || !lastName || !title || !text) {
    response.status(400).json({ code: 400, message: "Bad request" });
  } else {
    const post = { id: v4(), firstName, lastName, title, text };
    posts.push(post);
    response.status(201).json(post);
  }
});


//Delete

router.delete("/:id", (request, response) => {
  // Пример того что у нас лежит в params
  // const params = {
  //   id: 1234
  // }
  // const id = request.params.id;
  // const {id} = request.params;
  const { id } = request.params;
  const postForDelete = posts.find((p) => p.id === id);
  if (!postForDelete) {
    response
      .status(404)
      .json({ code: 404, message: `Post with id ${id} is not found` });
    throw new Error("Not Found");
  } else {
    const postIndex = posts.findIndex((p) => p.id === id); // Например 0
    posts.splice(postIndex, 1);
    response.status(200).json(posts);
  }
});