const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/1955')

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {timestamps: true })
mongoose.model('User', UserSchema)
var User = mongoose.model('User');

app.get('/', function(req, res){
    User.find({}, (err, data) => {
        if(err){
            console.log('Could not find users')
        }else{
            console.log('all users')
            res.json({message: "Success", data: data})
        }
    })
})
app.get('/new/:name', function(req, res){
    console.log('data ', req.params)
    User.create(req.params, (err, data) =>{
        if(err){
            console.log('could not create new user')
        }else{
            console.log('created new user', data)
            // res.json({message: "Success", data: data})
            res.redirect('/')
        }
    })
})
app.get('/remove/:name', function (req, res){
    User.remove({name: req.params.name }, function(err, data){
        if(err){
            console.log('could not delete')
        }else{
            console.log('deleted')
            // res.json({message: "Success", data: data})
            res.redirect('/')

        }
    })
})
app.get('/:name', function(req, res){
    User.find({name: req.params.name}, function(err, data){
        if(err){
            console.log('could not get one')
        }else{
            console.log('got em', data)
            // res.json({message: "Success", data: data})
            res.json({message: "Success", data: data})

        }
    })
})

