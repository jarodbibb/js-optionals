const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/', function(req, res){
    res.sendfile('./views/index.html')
})
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
app.get('/update/:id', (req, res)=>{
    res.sendfile('./views/update.html', {data: req.params.id})
})
app.get('/task/:id', function(req, res){
    Task.find({_id: req.params.id}, function(err, data){
        if(err){
            console.log('error getting one')
            res.json({message: "Error", data: err})
        }else{
            console.log('succes getting one')
            res.json({message: "Success", data: data})
        }
    })
})
app.post('/task', function(req,res){
    console.log('reqqin body', req.body.title)
    Task.create(req.body, function(err, data){
        if(err){
            console.log('error creating one');
            res.json({message: "Error", data: err})
        }else{
            console.log('data from post')
            res.redirect('/task')
        }
    })
})
app.put('/task/:title', function(req, res){
    Task.findOneAndUpdate({title: req.params.title}, (err, data)=>{
        if(err){
            console.log('error updating')
            res.json({message: "Error", data:err})
        }else{
            console.log('data from update succes')
            res.redirect('/task')
        }
    })
})
app.get('/delete/:id', function(req, res){
    Task.remove({_id: req.params.id}, function(err,data){
        if(err){
            console.log('Did not delete')
            res.json({message: "Error", data: err})
        }else{
            console.log('sucess deleted')
            res.redirect('/task')
        }
    })
})