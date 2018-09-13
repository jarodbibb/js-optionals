const mongoose = require('mongoose')
 const secrets = require('../controllers/secrets.js')



   module.exports = function(app){
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.get('/delete/:id/:userId', (req, res) => {
      secrets.delete(req, res)
    })
    app.post('/notes/:id', (req, res) => {
       secrets.createComs(req, res)
    })
    app.get('/getSecret/:id', (req, res) => {
      secrets.getOne(req, res)
    })
    app.post('/secret/:id', (req, res) => {
      secrets.makeSec(req, res)
    })
    app.get('/success/:id', (req, res) => {
        secrets.getAllSec(req, res)
    })
    
    app.post('/session', (req, res) => {
        secrets.login(req, res)
    })
    
    app.post('/users', (req, res) => {
      secrets.register(req, res)
   })
}