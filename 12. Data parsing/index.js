import express from "express";

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, email, password } = req.body;

  res.json({ message: "Login successfull", username, email });
});

app.listen(5011, () => console.log("5011: Server running..."));
