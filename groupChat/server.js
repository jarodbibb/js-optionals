const express = require('express');
var path= require('path');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const io = require('socket.io').listen(server);
var chat = [];
var members = {};
app.get('/', function(req, res){
    res.render('index')
})
io.on('connection', function(socket){
    socket.on('newPerson', function(data){
        members.name = data.name
        console.log('in server new person', members.name)
        socket.emit('welcome', chat)
        socket.broadcast.emit('newest', {name: members})
    })
    socket.on('posting', function(data){
        chat.push(data);
        io.emit('message', chat )
    })

     socket.on('disconnect', function(){
    console.log('Socket ' + socket.id + ' has disconnected from our chatroom!');
  })
})


