import express from "express";
import students from "./students.js";
import isValidId from "./middlewares/logs.js";

const app = express();

// using this it will become middleware for all the routes
//1. for particular routes
app.use("/about", isValidId);
//2. for all routes
app.use(isValidId);

// first way
app.get("/students/", (req, res) => {
  res.json(students);
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});
app.get("/about", (req, res) => {
  res.send("About");
});

// second way
// app.get("/students", isValidId, (req, res) => {
//   res.json(students);
// });

app.listen(5009, () => console.log("5009: Server running..."));
