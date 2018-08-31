const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const io = require('socket.io')(server);
var color = 'white';

io.on('connection', function(socket){
    io.emit('connected', {msg:" welcome to colors", color: color})
    socket.on("selectedColor", function(data){
        color = data.color
        io.emit('changed', {msg: color})
    })
})

app.get('/', function(req, res){
    res.render('index')
})