const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port);
console.log("App now running on port", port);
