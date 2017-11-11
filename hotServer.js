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

var tableSection

//Grabs customer input
var name
var phoneNum
var email
var uniqueId 

//Creates local "temporary" object for holding data
var newCustomer = {
	name: name,
	phoneNum: phoneNum,
	email: email,
	uniqueId: uniqueId
};

//Check to make sure it works
console.log(newCustomer.name);
console.log(newCustomer.phoneNum);
console.log(newCustomer.email);
console.log(newCustomer.uniqueId);

//Store everything into a varaiable
var waitinglistSection
var table

