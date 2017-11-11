const express = require("express");
const PORT = 3000;
const app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Grabs customer input
var name = "";
var phoneNum = "";
var email = "";
var uniqueId;

//Creates local "temporary" object for holding data
var reservation = {
	name: name,
	phoneNum: phoneNum,
	email: email,
	uniqueId: uniqueId
};


//Check to make sure it works
console.log(reservation.name);
console.log(reservation.phoneNum);
console.log(reservation.email);
console.log(reservation.uniqueId);

//Store everything into a varaiable
var waitinglistSection;
var table = [];

app.get("/index", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve",function(req,res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


app.post("/table", function(req, res) {
	console.log(req.body)
	var newReservation = req.body;
	table.push(newReservation);
	console.log(table);
	res.json(table);
})

app.listen(PORT, function() {
	console.log("Listening at PORT: " + PORT);
})