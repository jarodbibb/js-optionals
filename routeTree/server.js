var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./client/static')));
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json()); 
app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./public/dist/index.html"));
})
app.listen(8000, function(){
    console.log("Listening on port 8000")
})
