var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    rank: {type: Number},
    score: {type: Number}
}, {timestamps: true})
var User = mongoose.model("User", UserSchema)