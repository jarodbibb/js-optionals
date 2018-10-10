var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
const axios = require('axios');
require('./server/config/mongoose.js')
var route = require('./server/config/routes.js');
route(app);
var Users = require('./server/controllers/users.js')

// app.get('/apicall/:name', (req, res)=> {
//     console.log('from server req params', req.params.name)
//  axios.get("https://api.github.com/users/" + req.params.name).then(data=> {
//      console.log('data direct from api', data.data)
//    (function (request, response) { 
//         Users.create(request, response)}) ();
//      res.json({message:"Success", data: data.data })
//  }).catch(error => {
//     res.json({message: "Error"})
// })
// })

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/index.html'))
})
// app.get("api/:username", (err, data)=> {

// })
app.listen(8000, function(){
    console.log('Listening to port 8000')
})