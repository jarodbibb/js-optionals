var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    getAll: (req, res) => {
        User.find({}).sort([['score', -1]]).exec( (err, data) => {

            if(err){
                res.json({message: "Error", data: err})
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
    update: (req, res) => {
        User.findById(req.params.id, (err, data) => {
            if(err){
                res.json({message: "Error finding id", data: err})
            }else{
                if(data.score < req.body.score){
                    data.score = req.body.score;
                    User.save((err, data)=> {
                        if(err){
                            res.json({message: "Error updating", data: err})
                        }else{
                            res.json({message: "Success", data: data})

                        }
                    })
                }
            }
        })
    }
}