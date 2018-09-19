var Cakes = require('../controllers/cakes.js');
var mongoose = require('mongoose');

module.exports = function(app){
    app.get('/', function(req, res){
        Cakes.getAll(req, res)
    })
    app.post('/cake', (req,res)=>{

        Cakes.create(req, res);
    })
    app.put('cake/:id', (req, res)=> {
        Cakes.update(req, res)
    })
    app.get('/cakes/:id',(req, res)=> {
        Cakes.getOne(req, res)
    })

}