const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var session = require('express-session');
app.use(session({secret:'jaros'}));
const io = require('socket.io').listen(server)
const flash = require('express-flash');
app.use(flash());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');

var CommentSchema = new mongoose.Schema({
    name: {type:String, required: [true, "must enter a name"], minlength: [2,"name must be 2 character long"]},
    content: {type: String, required: [true, "must enter content"], minlength: [3, "comment must be three characters long"]}
}, {timestamps: true});
mongoose.model('Comment', CommentSchema)
var Comment = mongoose.model('Comment')
var MessageSchema = new mongoose.Schema({
    name: {type: String, required:[true, "must enter a name"], minlenght: [2, "nickname must be atleast 2 characters long"]},
    messContent: {type: String, required: [true, 'must enter a message'], minlength: [3, "messages must be atleast threee characters long"]},
    comments: [CommentSchema]
}, {timestamps: true});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');
app.get('/', function(req, res){
    Message.find({}, function(err, messages){
        if(err){
            console.log('cound not retrieve all')
        }else{
            // for(let i = 0; i< messages.length; i++){
            //     console.log('for loopin', messages[i])
            // console.log('messages to see if they have comments', messages)
            // }
            res.render('index',{message: messages})
        }
        
    })
    // res.render('index')
})
io.on('connection', function(socket){
    socket.on('newMessage', function(data){
        var message = new Message({name: data.name, messContent: data.message});
        message.save(function(err){
            if(err){
                console.log('we errorin')
                // for(var key in err.errors){
                //     req.flash('registration', err.errors[key].message)
                // }
            }
            socket.emit('saved', message)

        })

    })
    socket.on('commenting',function(data){
        console.log('we back up in here', data)
        // console.log('we commenting this thang', data)
        // var comment = new Comment({name: data.name, content: data.message});
        // comment.save(function(err){
        //     if(err){
        //         console.log('error in saving comments')
        //     }else{
        //         socket.emit('commentSaved', comment)
        //     }

        // })
   
        Comment.create({name: data.name, content:data.message}, function(err, comment){
            if(err){
                console.log('error creating comment')
            }else{
         
                Message.findOneAndUpdate({_id: data.messId}, {$push:{"comments": comment}}, function(err, data){
                    if(data){
                        console.log('it worked ', comment)
                        socket.emit('commentSaved', {comments: comment})
                    }else{
                        console.log('did not save comment')
                    }
                })
            }
        })
    })
})