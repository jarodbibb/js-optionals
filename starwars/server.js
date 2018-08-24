var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const axios = require('axios');
app.get('/', function(req, res){
    res.render("main");
})
app.get('/people', function(req, res){
    console.log("request: ", req.body)
    axios.get("https://swapi.co/api/people/1/")

    .then(data => {
        console.log('here', res);
        res.data
    })
    .catch(error => {
        console.log(error);
        res.json(error)
    })
    
    res.redirect('/');
})
app.listen(8000, function(){
    console.log("listening on port")
})

