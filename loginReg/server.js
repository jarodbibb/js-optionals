const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// const bcrypt = require('bcrypt-as-promised');
app.use(express.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const session = require('express-session');
const bcrypt = require('bcrypt');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
const flash = require('express-flash');
app.use(flash());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');
bcrypt.hash('myPassword', 10, function(err, hash) {
    // Store hash in database
  });

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'must enter your first name'], minlength: [2, 'name must be two characters long'] },
    last_name: {type:String, required: [true, "Must enter your last name"], minlength: [2, 'Please enter your last name']},
    email: {type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please fill in valid email address']  },
    password: {type: String, required: [true, 'must enter one'], minlength:[4, 'must be 4 characters long']},
    birthdate: {type: Date, match:[/^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/, 'must be valid']},
})
mongoose.model('User', UserSchema)
var User = mongoose.model('User')
var CommentSchema = new mongoose.Schema({
    comment: {type:String, required: [true, 'must leave a comment'], minlenght: [2, 'comment must be at least 2 characters']},
})
mongoose.model('Comment', CommentSchema)
var Comment = mongoose.model('Comment')
var SecretSchema = new mongoose.Schema({
    secret: {type: String, required:[true, 'secret can not be blank'], minlength: [2, 'leave a real secret'] },
    user: {type: String},
    comments: [CommentSchema]
})
mongoose.model('Secret', SecretSchema)
var Secret = mongoose.model('Secret')
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/notes/:id', (req, res)=>{
    Secret.findOne({ id: req.params._id}, (err, data)=>{
        if(err){
            console.log('did not load')
        }else{
            console.log('getting data for secrets should be only one', data._id)
            Comment.create( {comment: req.body.note}, (err, not) =>{
                if(err){
                    console.log('comment did not save')
                }else{
                    console.log('data comments', data.comments)
                    data.comments.push(not)
                    console.log('saved comment',data.comments)
                    res.render('yes', {secret: data.comments})
                }
            } )
        }
    })

})
app.get('/comments/:id', (req, res)=> {
        Secret.findOne({ id: req.params._id}, (err, data)=>{
            if(err){
                console.log('did not load')
            }else{
                console.log('getting data for secrets should be only one', data)
                res.render('yes', {secret: data})
            }
        })
    })
app.post('/secret', (req, res) => {
    Secret.create({secret: req.body.secret, user: req.session.user_id}, (err, secret) =>{
        if(err){
            console.log('Secret did not save correctly')
        }else{
            console.log('secret data', secret)
        
                    res.redirect('/success')

                }
            })
})
app.get('/success', (req, res)=> {
    Secret.find({}, (err, data) =>{
        if(err){
            console.log('could not find secrets')
        } else {
            console.log('data from secrets ', data[0]._id)
            res.render('success', {secrets: data})
        }
    })
})

app.post('/session', (req, res) => {
    console.log(" req.body : ", req.body)
   User.findOne({email: req.body.email}, (err, user) =>{
       console.log('find a user', user)
       if(err){
           console.log("Error, finding user")
       }else{
           var hashed_p;
        //    bcrypt.hash(req.body.password, 10, function(err, hash){
        //        console.log('checking hash', hash)
        //        hashed_p = hash
               bcrypt.compare(req.body.password , user.password, function(err, data){
                   if(data){
                       console.log('they matched')
                       req.session.user_id = user._id;
                       req.session.email = user.email
                       var data = false;
                       res.redirect('/success')
     
                   } else{
                       console.log('comparison did not work')
                       res.redirect('/')
                   }
     
               })
             
        //    })
          
        }
        })
    })

   app.post('/users', (req, res)=> {
    bcrypt.hash(req.body.password, 10)
    .then(hashed_password => {
        console.log('success hasing password', hashed_password)
        User.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email,  password: hashed_password, birthdate: req.body.birthdate}, (err, user) => {
        // , }
            if(err){
                console.log('Could not create new user')
                res.redirect('/')
            }else{
                console.log('users: ', user.first_name)
                req.session.user_id = user._id;
                req.session.email = user.email;
                req.session.first_name = user.first_name;
                var data = false;
                
                res.redirect('/success')
             }
                })
       
})
    .catch(error => {
        console.log('error hasing password')
	 
});

   })