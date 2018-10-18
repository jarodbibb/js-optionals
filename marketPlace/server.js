var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.json());
app.use(express.static(__dirname + ' ./public/dist/public'));
const axios = require('axios');
require('./server/config/mongoose.js')
var route = require('./server/config/routes.js');
route(app);
var Products = require('./server/controllers/products.js')
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/index.html'))

})
app.listen(8000, function(){
    console.log('Listening to port 8000')
})