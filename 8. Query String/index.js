import express from "express";

const app = express();

// Query string=  /href?key1=value1&key2=value2

// first way
// app.get("/where", (req, res) => {
//   res.send(`Place = ${req.query.place}, on ${req.query.date}`);
// });

// second way
app.get("/where", (req, res) => {
  const { place, date } = req.query;
  res.send(`Place = ${place}, on ${date}`);
});

app.listen(5007, () => console.log("5007: Server running..."));
