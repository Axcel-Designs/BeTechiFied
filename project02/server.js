require("dotenv").config()
const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT

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

app.listen(port, () => {
  console.log(`listening to server ${port}`);
});
