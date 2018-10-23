var mongoose = require('mongoose')
var Products = require('../controllers/bikes.js')
var Users = require('../controllers/users.js')

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
    app.get('/users', (req, res)=> {
        Users.getAll(req, res)
    })
    app.post("/users", (req,res)=> {
        Users.create(req, res)
    })
    app.put('/users/:id', (req, res)=> {
        Users.update(req,res)
    })
    app.delete('/users/:id', (req,res) => {
        Users.delete(req,res)
    })
    app.get('/users/:id', (req, res) => {
        Users.getOne(req,res)
    })
}