var Players = require('../controllers/players.js');
var mongoose = require('mongoose');

module.exports = function(app){
    console.log('routing')
    app.get('/team', function(req, res){
        Players.getAll(req, res)
    })
    app.post('/player', (req, res)=> {
        Players.create(req, res)
    })
    app.delete('/delete/:id', (req, res)=>{
        console.log('deletes in route')
        Players.delete(req, res)
    })
    app.put('/player/:id', (req, res) => {
        console.log('routin this thang', req.body)
        Players.editPlayer(req, res)
    })
}