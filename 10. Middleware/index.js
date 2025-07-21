import express from "express";
import students from "./students.js";
import isValidId from "./middlewares/logs.js";

const app = express();

app.get("/students/:id", isValidId, (req, res) => {
  res.json(students);
});

app.listen(5009, () => console.log("5009: Server running..."));
