require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sam", (req, res) => {
  res.send("Samrajya!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login First</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Sam</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
