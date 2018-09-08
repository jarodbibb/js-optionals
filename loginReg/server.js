const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(epxress.static(path.join(__dirname, './static')));
const server = app.listen(1337);
app.set('views', path.join(__dirname, './views'));
app.set('views engine', 'ejs');
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))