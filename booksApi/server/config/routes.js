const mongoose = require('mongoose');
const authors = require('../controllers/authors.js');


module.exports = function(app){
    
    app.get('/author', (req, res) => {
        console.log('index route')
        authors.getAll(req, res)
    })
    app.get('/author/:id', (req, res) => {
        authors.getOne(req, res)
    })
    app.post('/author/:id', (req, res) => {
        authors.create(req, res)
    })
    app.get('/delete/:id', (req, res)=> {
        authors.delete(req, res)
    })
    app.put('/edit/:id', (req, res) => {
        authors.edit(req, res)
    })

}