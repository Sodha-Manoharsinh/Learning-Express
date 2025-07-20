import express from "express";

const app = express();

// |||||        Using app.route        |||||

app
  .route("/method")
  .get((req, res) => res.send("Get Method"))
  .post((req, res) => res.send("Post Method"))
  .put((req, res) => res.send("Put Method"))
  .delete((req, res) => res.send("Delete Method"));

app.listen(5003, (error) => console.log(error ? error : "Server running..."));
