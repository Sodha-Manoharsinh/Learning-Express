import express from "express";
import path from "path";

const app = express();

// built-in middleware to use static files and giving the path
app.use(express.static("./public"));

// sendFile:- sends the file to the path
// path.join:- joins the path we want the static file
// process.cwd() :- gives us the current working directory
// joining the current working directory with public folder's html file

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(5010, () => console.log("8010: Server running..."));
