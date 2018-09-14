const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/task');
var TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed:{type: Boolean}

}, {timestamps: true})

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

app.get('/task', function(req, res){
    Task.find({}, (err, data) =>{
        if(err){
            console.log('error could not retreive all tasks')
            res.json({message: "Error", data: err})
        } else{
            console.log('success', data)
            res.json({message: "Success", data: data})
        }
    })
})
app.get('/task/:id', function(req, res){
    Task.find({_id: req.params.id}, function(err, data){
        if(err){
            console.log('error getting one')
            res.json({message: "Error", data: err})
        }
    })
})
