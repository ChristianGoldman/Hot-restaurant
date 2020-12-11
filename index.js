// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  }); 

  app.get("/", function(req, res) {
    res.send("Welcome to HOT RESTAURANT");
  });