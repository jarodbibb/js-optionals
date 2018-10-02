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
        Player.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({ message: "Success", data: data})
            }
        })
    }
}