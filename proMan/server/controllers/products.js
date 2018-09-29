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
        console.log('in delete req.params', req.params.id)
        Product.remove({_id: req.params.id}, (err, result)=>{
            if(err){
                res.json({message: "Error", data: result})
            }else{
                res.json({message: "Success", data: result})
            }
        })
    },
    update: function(req, res){
        console.log('req body', req.body.price)
        Product.update({_id: req.params.id},{$set: {title: req.body.title, price: req.body.price} }, (err, result)=> {
            if(err){
                res.json({message:"error", data: result})
            }else{
                res.json({message: "Success", data: result})
            }
        })
    }

}