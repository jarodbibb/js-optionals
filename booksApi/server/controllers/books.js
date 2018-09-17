const mongoose = require('mongoose');
const Book = mongoose.model('Book');

module.exports ={
    delete: function(req, res){
        Book.remove({_id: req.params.id}, function(err, data){
            if(err){
                console.log('did not delete')
            }else{
                res.redirect('')
            }
        })
    },
    create: function(req, res){
        Book.create({title: req.body.title}, (err, bookData)=>{
            if(err){
                console.log('comment book did not save')
            }else{
                console.log('create data', bookData);
                res.redirect('log something here')
            
            }
        })
    },
    getOne: function(req, res){
        Book.findById(req.params.id, (err, data)=>{
            if(err){
                console.log('could not find one controllers');
            }else{
                console.log('found one')
                res.redirect(found one)
            }
        })
    },
    getAll: function(req, res){
        Book.find({}, (err, data) => {
            if(err){}
        })
    }

}