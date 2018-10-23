var mongoose = require('mongoose')
var Bike = mongoose.model('Bike')

model.exports = {
    getAll: (req, res)=> {
        Bike.find({}, (err, data) => {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    delete: (req, res) => {
        Bike.findByIdAndRemove(req.params.id, (err, data)=> {
            if(err){
                res.json({message:"Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    create: (req, res) => {
        Bike.create(req.body, (err, data) => {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Succes", data: data})
            }
        })
    },
    updated: (req, res) => {
        Bike.findByIdAndUpdate(req.params.id, )
    }
}