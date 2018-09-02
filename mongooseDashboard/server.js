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
// const flash = require('express-flash');
// app.use(flash());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');
var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, min: 0, max: 99}

}, { timestapms: true})
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal')

app.get('/', function(req, res){
    Animal.find({}, function(err, animals){
        console.log(animals);
        res.render('index', {animal: animals})
    })
    // res.render('index')
})
app.get('/new', function(req, res){
    res.render('new')
})
app.post('/mongooses', function(req, res){
    var animal = new Animal({name: req.body.name, age: req.body.age})
  animal.save(function(err){
      console.log('inside save')
      if(err){
          console.log('did not save animal')
      } else{
          console.log('successfully save new animal')
          res.redirect('/');
      }
  })
})
  app.get('/mongoose/:id', function(req, res){
      console.log( req.params.id)
      Animal.findById(req.params.id, function(err, data){
          if(err){
              console.log("Error finding someone by id")
          }else{
              console.log('succes finding someone', data)
              res.render('one', {one : data})
          }
      })
  })
  app.post('/mongoose/edit/:id', function(req, res){
      Animal.findOneAndUpdate({_id: req.params.id},req.body , function(err, data){
          if (err){
              console.log('error finding someone by id')
          }else {
              console.log('updated success')
              res.redirect('/')
          }
      })
  })
  app.post('/delete/:id', function(req, res){
      Animal.findOneAndRemove({_id: req.params.id}, function(err, data){
          if(err){
              console.log('deleted')
          }else {
              console.log('later')
              res.redirect('/')
          }
      })
  })

