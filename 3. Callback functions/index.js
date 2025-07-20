import express from "express";

const app = express();

// |||||            Callback functions          |||||

// 1. We can have one callback as we used up
// 2. We can have more than 1 callback functions separating by ","
// 3. We can pass multiple callback functions using array
// 4. we can use upper 3 in mix all together

const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};
const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};

app.get(
  "/multiple",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third callback");
    next();
  },
  (req, res) => {
    res.send("Multiple callback functions");
  }
);

app.listen(5002, (error) => console.log(error ? error : "Server running..."));
