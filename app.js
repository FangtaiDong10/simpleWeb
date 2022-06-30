const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "index.html");
  res.sendFile(htmlFile);
});

app.get("/restaurants", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "restaurants.html");
  res.sendFile(htmlFile);
});

app.get("/recommend", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "recommend.html");
  res.sendFile(htmlFile);
});

app.get("/confirm", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "confirm.html");
  res.sendFile(htmlFile);
});

app.get("/about", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "about.html");
  res.sendFile(htmlFile);
});

app.listen(3000);
