var mongoose = require('mongoose')
var Users = require('../controllers/users.js')

module.exports = function(app) {
    app.get('/user', function(req, res) {
        Users.getAll(req, res)
    })
    app.post('/user', (req, res) => {
        Users.create(req, res)
    })
    app.put('/user/:id', (req, res) => {
        Users.update(req, res)
    })
    
}