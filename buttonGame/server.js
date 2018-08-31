const express = require('express');
var path = require('path')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const io = require('socket.io').listen(server);

var counter = 0 ;
io.on('connection', function (socket){
    io.emit('connected', {msg: "hello, welcome to my socketS"})
    
    socket.on('increment', function(data){
        console.log(data.inc)
        counter += 1
        console.log("right here", counter)
        io.emit('incremented', {msg: counter})
    })
    socket.on('reset', function(data){
        console.log(data.msg)
        counter = 0;
        io.emit('reseted', {msg: counter})
    })
})
app.get('/', function(req, res){
    res.render('index')
})