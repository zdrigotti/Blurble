const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});