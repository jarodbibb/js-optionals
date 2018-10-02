var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    position: {type: String, minlength: 2},
    game1: {type: String, default: 'undecided'},
    game2: {type: String, default: 'undecided'},
    game3: { type: String, default: 'undecided'}
}, {timestamps: true})

var Player = mongoose.model("Player", PlayerSchema)