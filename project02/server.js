require('dotenv').config
const express = require("express");
const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ echoed: req.body });
  console.log(`hello ${name}`);
});

app.get("/", (req, res) => {
  res.send("My Week 2 API");
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

app.get("/search", (req, res) => {
  const id = req.query.id;
  res.send(id);
});

app.listen(8000, () => {
  console.log("listening to server 8000");
});
