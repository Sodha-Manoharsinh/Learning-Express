import express from "express";

const app = express();

// app.get("/products/:product/:id", (req, res) => {
//   const { product, id } = req.params; // first way to get parameters from url
//   res.send(`Product ${product} with id = ${req.params.id}`); // second way
// });

// 3rd callback or middleware way to get parameters automatically.
app.param("id", (req, res, next, id) => {
  console.log("Id =", id);
  next();
});

app.get("/user/:id", (req, res) => {
  res.send("Response Ok");
});

app.listen(5005, () => console.log("5005: Server running..."));
