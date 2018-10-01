var Notes = require('../controllers/notes.js');
var mongoose = require('mongoose');

module.exports = function(app){
    app.get('/note', function(req, res){
        Notes.getAll(req, res)
    })
    app.post('/note', (req, res) => {
        Notes.create(req, res)
    })
    app.delete('/note/:id', (req, res)=> {
        Notes.delete(req, res)
    })
}