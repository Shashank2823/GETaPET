var express = require("express");
var app = express();
var cors = require("cors"); // Import the cors middleware
var connection = require("./database");

app.use(cors()); // Enable CORS for all routes

app.get("/", function (req, res) {
  let sql = "Select * from pets";
  connection.query(sql, function (err, results) {
    res.send(results);
  });
});

app.listen(4000, function () {
  console.log("App Listening on port 4000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});
