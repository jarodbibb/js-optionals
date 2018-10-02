var Players = require('../controllers/players.js');
var mongoose = require('mongoose');

module.exports = function(app){
    app.get('/team', function(req, res){
        Players.getAll(req, res)
    })
    app.post('/player', (req, res)=> {
        Players.create(req, res)
    })
    app.delete('player/:id', (req, res)=>{
        Players.delete(req, res)
    })
    app.put('player/:id', (req, res) => {
        Players.editPlayer(req, res)
    })
}