const mongoose = require('mongoose');
const books = require('../controllers/books.js');

module.exports = function(app){
    app.get('/', (req, res) => {
        books.getAll(req, res)
    })
    app.get('/book/:id', (req, res) => {
        books.getOne(req, res)
    })
    app.post('/book/:id', (req, res) => {
        books.create(req, res)
    })
    app.get('/delete/:id', (req, res)=> {
        books.delete(req, res)
    })

}