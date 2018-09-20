var mongoose = require('mongoose');
var Cake = mongoose.model('Cake')
var Rating = mongoose.model('Rating')

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
                res.json({message: "Success", data: data})
            }
        })
    },
    update: function(req, res){
        Rating.create(req.body, (err, ratings)=> {
            if(err){
                res.json({message:"Error", data: err})
            }else{
                Cake.update({_id: request.params.id}, {$push: {rates: ratings}}, (err, data)=>{
                    if(err){
                        console.log('Error')
                        res.json({message: "Error", data: err})
                    }else{
                        console.log("Success")
                        res.json({message: "Success", data: data})
                    }
                } )
            }
        })
    },
    getOne: function(req, res){
        Cake.find({_id: req.params.id}, (err, data)=> {
            if(err){
                res.json({message: "Error", data: err})
                console.log('error')
            }else{
                console.log('Success')
                res.json({message: "Success", data:data })

            }
        })
    }
}