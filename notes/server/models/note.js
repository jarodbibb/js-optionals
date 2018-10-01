var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    message: {type: String, minlength: 3}
},{timestamps: true})

