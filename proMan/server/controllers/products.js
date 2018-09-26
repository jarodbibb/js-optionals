var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    getAll: function(req, res){
        Product.find({}, (err, result) => {
            if(err){
                res.json({message:"Error", data: result})
            }else{
                res.json({message:"Success", data: result})
            }

        })
    },
    create:function (req, res){
        Product.create(req.body, (err, result)=>{
            if(err){
                res.json({message:"Error", data: result})
            }else{
                res.json({message: "Success", data: result})
            }
        })
    },
    getOne: function(req, res){
        Product.find({_id: req.params.id}, (err,result)=> {
            if (err){
                res.json({message: "Error", data: result})
            }else{
                res.json({message:"Success", data: result})
            }
        })
    },
    delete: function(req, res){
        Product.remove({_id: req.params.id}, (err, result)=>{
            if(err){
                res.json({message: "Error", data: result})
            }else{
                res.json({message: "Success", data: result})
            }
        })
    },
    update: function(req, res){
        Product.update({_id: req.params.id},{$set: req.body}, (err, result)=> {
            if(err){
                res.json({message:"error", data: result})
            }else{
                res.json({message: "Success", data: result})
            }
        })
    }

}