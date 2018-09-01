const express = require('express');
var path= require('path');
const app = express()
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const io = require('socket.io').listen(server);

app.get('/', function(req, res){
    res.render('index' )
})

io.on('connection', function(socket){
    console.log('socke id', socket.id)
    socket.broadcast.emit('joined', socket.id)

    socket.on('disconnect', function(){
        socket.broadcast.emit('disconnected', socket.id)
    })
    socket.on('pushed', function(){
        io.emit('message', socket.id)
    })
})