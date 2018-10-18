var mongoose = require('mongoose')
var Products = require('../controllers/products.js')

module.exports = function(app){
    app.get('/products', function(req,res) {
        Products.getAll(req,res)
    })
    app.post('/products', function(req, res){
        Products.create(req,res)
    })
    app.put('/products/:id', (req, res)=> {
        Products.update(req, res)
    })
    app.delete('/products/:id', (req,res) => {
        Products.delete(req, res)
    })
    app.get('products/:id', (req, res)=> {
        Products.getOne(req, res)
    })
}