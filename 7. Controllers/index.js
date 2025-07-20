import express from "express";
import students from "./routes/student.js";

const app = express();

app.use("/", students);

app.listen(5006, () => console.log("5006: Server running..."));
