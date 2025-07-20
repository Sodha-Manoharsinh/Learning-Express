import express from "express";

const app = express();

// |||||            Regex           |||||

// String Pattern Path
app.get(/^\/ab?cd$/, (req, res) => {
  res.send("Works only if acd and abcd");
});

app.get(/xy/, (req, res) => {
  res.send("Works only if xy is included in path");
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("Working..");
});

app.listen(5001, (error) => console.log(error ? error : "Server running..."));
