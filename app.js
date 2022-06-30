const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

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

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  // write back to the txt file
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  // do redirect
  res.redirect("/confirm");
  
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
