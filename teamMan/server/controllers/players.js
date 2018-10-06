var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    getAll: (req,res) => {
        Player.find({}, (err, data) => {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    create: (req, res) => {
        Player.create(req.body, (err, data)=>{
            if(err){
                res.json({message:"Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    delete: (req, res) => {
        Player.findByIdAndRemove(req.params.id, (err, data)=> {
            if(err){
                res.json({message:"Error", data: err})
            }else{
                res.json({message:"Success", data:data})
            }
        })
    },
    editPlayer: (req, res)=> {
    console.log("wreckin bodies ", req.body.game )
    var gameNum = req.body.game;
    var status = req.body.status;
    var newObj = {}
    newObj[gameNum] = status;
    console.log('testing how to use a variable as a key', )
    Player.findByIdAndUpdate(req.params.id, {$set: newObj}, (err, data) => {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({ message: "Success", data: data})
            }
        })
    }
}