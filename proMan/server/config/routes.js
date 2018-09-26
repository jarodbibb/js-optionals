var Products = require('../controllers/products.js');
var mongoose = require('mongoose');

module.exports = function(app){
    app.get('/product', function(req, res){
        Products.getAll(req, res)
    })
    app.post('/product', function(req, res){
        Products.create(req, res)
    })
    app.get('/product/:id', (req, res) => {
        Products.getOne(req, res)
    })
    app.put('product/:id', (req, res)=>{
        Products.update(req, res)
    })
    app.delete('/product/:id', function(req, res){
        Products.delete(req, res)
    })
}