// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

const Table = require("./class/table");

// Arrays of our objects
const reservation = [];
const waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  }); 

  
  app.get("/api/tables", function(req, res) {
    res.send(reservation);
  });
  
  app.get("/api/waitlist", function(req, res) {
    res.send(waitList);
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "html/home.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "html/tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "html/reserve.html"));
  });