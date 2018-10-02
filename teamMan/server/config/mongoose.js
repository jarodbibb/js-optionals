var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/teamManager_db');
var models_path = path.join(__dirname, './../models')
mongoose.Promoise = global.Promise;
fs.readdirSync(models_path).forEach((file) => {
    if(file.indexOf('.js') >= 0 ){
        require(models_path + "/" + file)
    }
})