var mongoose = require('mongoose');
var Note = mongoose.model('Note')

module.exports = {
    getAll: (req, res)=> {
        Note.find({}, (err, data)=> {
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    create: (req, res)=> {
        Note.create(req.body, (err, data)=>{
            if(err){
                res.json({message: "Error", data: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })
    },
    
}