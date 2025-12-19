require("dotenv").config();
const express = require("express");
// const { todoData } = require("./data");

const app = express();
const port = process.env.PORT;
app.use(express.json());

let todoData = [
  { id: 100, task: "Physics", completed: true },
  { id: 101, task: "Mathematics", completed: false },
  { id: 102, task: "Chemistry", completed: true },
  { id: 103, task: "Computer Science", completed: true },
  { id: 104, task: "Economics", completed: false },
  { id: 105, task: "Biology", completed: true },
  { id: 106, task: "Mechanical Engineering", completed: true },
  { id: 107, task: "Civil Engineering", completed: false },
  { id: 108, task: "History", completed: false },
  { id: 109, task: "Philosophy", completed: true },
  { id: 110, task: "Electrical Engineering", completed: true },
];

app.get("/todos", (req, res) => {
  res.status(200).json(todoData);
});
app.get("/todos/active", (req, res) => {
  const activeTodos = todoData.filter((item) => item.completed === true);
  res.status(200).json(activeTodos);
});
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todoData.findIndex((item) => item.id === parseInt(id));
  if (!todoData[index]) {
    res.status(404).json({ message: "not available or couldnt get" });
  }
  res.status(200).json(todoData[index]);
});

app.post("/todos", (req, res) => {
  const { courseCode, course, dept } = req.body;
  const newTodo = {
    id: todoData.length === 0 ? 1 : todoData[todoData.length - 1].id + 1,
    task,
    completed,
  };
  todoData.push(newTodo);
  res.status(200).json(todoData);
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const { completed, task } = req.body;

  const index = todoData.findIndex((item) => (item.id = parseInt(id)));

  if (!todoData[index]) {
    res.status(404).json({ message: "not available" });
  }

  todoData[index] = {
    ...todoData[index],
    completed: completed || todoData[index].completed,
    task: task || todoData[index].task,
  };
  res.status(200).json(todoData[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  const index = todoData.findIndex((item) => (item.id = parseInt(id)));

  if (!todoData[index]) {
    res.status(404).json({ message: "not available" });
  }
  todoData.splice(index, 1);
  res.status(200).json({ message: "sucess in deleting" }).send();
});

app.listen(port, () => {
  console.log(`listening to sever ${port}`);
});
