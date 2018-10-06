var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    getAll: (req, res) => {
        User.find({}, (err, data) => {

            if(err){
                res.jsoon({message: "Error", data: err})
            }else{
                res.json({message:"Success", data: data})
            }
        })
    },
    create: (req, res) => {
        User.create( req.body, (err, data)=> {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    delete: (req, res) =>{
        User.findByIdAndRemove(req.params.id, (err, data)=> {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
}