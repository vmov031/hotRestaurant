const express = require("express");
const PORT = 3000;
const app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
	console.log("Listening at PORT: " + PORT);
})