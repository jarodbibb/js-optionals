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
var count = 0
app.get('/people',  function(req, res){
    count++
    axios.get("https://swapi.co/api/people/?page=1").then(data => {
       
        res.json(data.data.results)
    }).catch(error => {
        
        res.json(error)
    })
    
    // res.redirect('/');
})

app.get('/people/next', function(req, res){
    count++;
    console.log("counnnnnnnnnnnnting:", count);
    axios.get("https://swapi.co/api/people/?page=" + count).then(data=> {
        res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })


})
app.get('/people/previous', function(req, res){
    count--;
    console.log("counnnnnnnnnnnnting:", count);
    axios.get("https://swapi.co/api/people/?page=" + count).then(data=> {
        res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })


})
app.listen(8000, function(){
    console.log("listening on port 8000")
})

