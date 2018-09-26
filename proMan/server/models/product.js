var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: {type:String, unique: true, required: [true, "Must enter a title"], minlength: [3, "must be 3 characters long"]},
    price: {type: Number, min: [1, "Must be atleast a dollar"]},
    img: {type: String, required: [true, "must give an image url"]},
})

var Product = mongoose.model('Product', ProductSchema);