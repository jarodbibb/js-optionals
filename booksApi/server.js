const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// const bcrypt = require('bcrypt-as-promised');
app.use(express.static( __dirname + '/public/dist/public' ));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const session = require('express-session');
// const bcrypt = require('bcrypt');
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
require('./server/config/mongoose.js')
require('./server/models/author.js');
require('./server/config/routes.js');
// require('./server/models/author.js');
