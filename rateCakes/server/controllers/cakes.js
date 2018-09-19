var mongoose = require('mongoose');
var Cake = mongoose.model('Cake')

module.exports = {
    getAll: function(req, res){
        Cake.find({}, (err, data)=>{
            if(err){
                res.json({message: "Success", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    create: function(req, res){
        Cake.create(req.body, (err, data)=> {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data}
            }
        })
    }
}