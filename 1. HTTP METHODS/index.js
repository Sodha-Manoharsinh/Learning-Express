import express from "express";

const app = express();

// |||||        HTTP METHODS        ||||||
// GET => Retrive Data
// POST => Create/Insert Data
// PUT => Completely update Data
// PATCH => Partially update Data
// DELETE => Delete Data
// All => Any http request method

app.get("/", (req, res) => {
  res.send(
    "<h1>This is Landing Page</h1><a href='/about'>About</a><hr><a href='/contact'>Contact</a>"
  );
});
app.get("/about", (req, res) => {
  res.send(
    "<h1>This is About Page</h1><a href='/'>Home</a><hr><a href='/contact'>Contact</a>"
  );
});
app.get("/contact", (req, res) => {
  res.send(
    "<h1>This is Contact Page</h1><a href='/'>Home</a><hr><a href='/about'>About</a>"
  );
});

app.listen(5000, (error) => console.log(error ? error : "Server running..."));
