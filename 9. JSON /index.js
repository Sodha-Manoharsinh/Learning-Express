import express from "express";
import students from "./students.js";

const app = express();

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(5008, () => console.log("5008: Server running..."));
