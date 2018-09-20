var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
   star: {type: Number, required: [true, 'please enter stars']},
   comments: {type: String, required: [true, 'please leave a comment']},
})
var Rating = mongoose.model("Rating", RatingSchema);

var CakeSchema = new mongoose.Schema({
    baker: {type: String, require:[true, "enter the name of the baker"]},
    image: {type: String, require: [true, "please enter an image url"]},
})
var Cake = mongoose.model("Cake", CakeSchema)