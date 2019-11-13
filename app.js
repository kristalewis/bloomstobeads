var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
	res.render("index.ejs");
});

app.get("/contact", function(req, res){
	res.render("contact.ejs");
});





app.get("*", function(req, res){
	res.send("error: page cannot be reached");
});



app.listen(3000, () => {
	console.log("server listening on port 3000");
});