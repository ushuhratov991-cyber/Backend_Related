import { Router } from "express";

import { v4 } from "uuid";

import { OverallStudents } from "./types";


const router = Router();

const studentManagment: OverallStudents[] = [
  {
    id: v4(),
    firstName: "John",
    lastName: "Johnson",
    age: 44,
    course: "QA",
    paymentStatus: false,
    averageGrade: 5.0,
  },
  {
    id: v4(),
    firstName: "Alex",
    lastName: "Hirsh",
    age: 23,
    course: "Frontend",
    paymentStatus: true,
    averageGrade: 9.0,
  },
  {
    id: v4(),
    firstName: "Anna",
    lastName: "Shmit",
    age: 19,
    course: "HR",
    paymentStatus: true,
    averageGrade: 1.0,
  },
  {
    id: v4(),
    firstName: "Caroline",
    lastName: "Broad",
    age: 50,
    course: "Ai Engeneer",
    paymentStatus: false,
    averageGrade: 7.0,
  },
  {
    id: v4(),
    firstName: "Martin",
    lastName: "Mayers",
    age: 27,
    course: "Web Designer",
    paymentStatus: true,
    averageGrade: 3.0,
  },
  {
    id: v4(),
    firstName: "Bill",
    lastName: "Shifr",
    age: 25,
    course: "Game Developper",
    paymentStatus: true,
    averageGrade: 8.0,
  },
  {
    id: v4(),
    firstName: "Sarah",
    lastName: "Willson",
    age: 44,
    course: "QA",
    paymentStatus: false,
    averageGrade: 5.0,
  },
];

//get all students
router.get("/", (_request, response) => {
  response.status(200).json(studentManagment);
});

//get one student
router.get("/:id", (request, response) => {
  const { id }: any = request.params;

  const findStudent = studentManagment.find((st) => st.id === id);

  if (!findStudent) {
    response
      .status(404)
      .json({ code: 404, message: `Student with id ${id} not found` });
  } else {
    response.status(200).json(findStudent);
  }
});


//add one student
router.post("/", (_request, response) => {
  const {
    firstName,
    lastName,
    age,
    course,
    paymentStatus,
    averageGrade,
  }: OverallStudents = _request.body;

  if (
    !firstName ||
    !lastName ||
    !age ||
    !course ||
    !paymentStatus ||
    !averageGrade
  ) {
    response.status(400).json({ code: 400, message: "Bed request" });
  } else {
    const student = {
      id: v4(),
      firstName,
      lastName,
      age,
      course,
      paymentStatus,
      averageGrade,
    };
    studentManagment.push(student);
    response.status(201).json(student);
  }
});

//update student info
router.patch("/:id", (request, response) => {
  const { id }: any = request.params;

  const {
    firstName,
    lastName,
    age,
    course,
    paymentStatus,
    averageGrade,
  }: OverallStudents = request.body;

  const studentUpdate = studentManagment.find((st) => st.id === id);

  if (!studentUpdate) {
    response
      .status(404)
      .json({ code: 404, message: `Student with id ${id} not found` });
    throw new Error("not found");
  }

  if (
    !firstName &&
    !lastName &&
    !age &&
    !course &&
    !paymentStatus &&
    !averageGrade
  ) {
    response.status(400).json({ code: 400, message: "Bed request" });
  }

  if (firstName) {
    studentUpdate.firstName = firstName;
  }

  if (lastName) {
    studentUpdate.lastName = lastName;
  }

  if (age) {
    studentUpdate.age = age;
  }

  if (course) {
    studentUpdate.course = course;
  }

  if (paymentStatus) {
    studentUpdate.paymentStatus = paymentStatus;
  }

  if (averageGrade) {
    studentUpdate.averageGrade = averageGrade;
  }

  response.status(200).json(studentUpdate);
});

//delete

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  const delteStudetn = studentManagment.find((st) => st.id === id);

  if (!delteStudetn) {
    response
      .status(404)
      .json({ code: 404, message: `Student with id ${id} not found` });
    throw new Error("Not found");
  } else {
    const studentIndex = studentManagment.findIndex((st) => st.id === id);
    studentManagment.splice(studentIndex, 1);
    response.status(200).json(studentManagment);
  }
});

router.patch("/:id", (_request, response) => {
  const { id } = _request.params;

  const { averageGrade }: OverallStudents = _request.body;

  const updateForAverageGrade = studentManagment.find((st) => st.id === id);

  if (!updateForAverageGrade) {
    response
      .status(404)
      .json({ code: 404, message: `Student with id ${id} not found` });
    throw new Error("not found!");
  }

  if (!averageGrade) {
    response.status(400).json({ code: 400, message: "Bad request" });
  }

  if (averageGrade) {
    updateForAverageGrade.averageGrade = averageGrade;
  }

  response.status(200).json(updateForAverageGrade);
});


export default router;
