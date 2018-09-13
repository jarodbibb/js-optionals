var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: [true, 'must enter your first name'], minlength: [2, 'name must be two characters long'] },
    last_name: { type: String, required: [true, "Must enter your last name"], minlength: [2, 'Please enter your last name'] },
    email: { type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please fill in valid email address'] },
    password: { type: String, required: [true, 'must enter one'], minlength: [4, 'must be 4 characters long'] },
    birthdate: { type: Date, match: [/^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/, 'must be valid'] },
})
mongoose.model('User', UserSchema)

var CommentSchema = new mongoose.Schema({
    comment: { type: String, required: [true, 'must leave a comment'], minlenght: [2, 'comment must be at least 2 characters'] },
})
mongoose.model('Comment', CommentSchema)


var SecretSchema = new mongoose.Schema({
    secret: { type: String, required: [true, 'secret can not be blank'], minlength: [2, 'leave a real secret'] },
    user: { type: String },
    comments: [CommentSchema]
})
mongoose.model('Secret', SecretSchema)


