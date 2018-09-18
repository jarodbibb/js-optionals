var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'must enter a title for the book'], minglength: [2, 'title must be at least 2 characters'] },
    publish: {type: Number, required: [true, 'enter field']},

})
mongoose.model('Book', BookSchema)
var AuthorSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'must enter a name'], minlength: [2, 'First name must be 2 characters long']},
    last_name: {type: String, required: [true, 'must enter a last name'], minlength: [2,"Last name must be at least 2 characters"]},
    birthdate: {type: Number, required: [true, 'must enter a birthdate'], },
    books: [BookSchema],
})
mongoose.model('Author', AuthorSchema)