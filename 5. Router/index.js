import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();

// 1. Create routes folder and put your routes in a separate file
// 2. Create an instace of express.Router()
// 3. Instead of app.method change that to router.method
// 4. Export router
// 5. Import router
// 6. use (app.use) built-in middleware & provide your routes

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(5004, () => console.log("5004: Server running..."));
