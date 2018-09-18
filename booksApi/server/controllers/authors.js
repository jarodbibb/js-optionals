const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports ={
    delete: function(req, res){
        Author.remove({_id: req.params.id}, function(err, data){
        if(err){
                console.log('did not delete')
            }else{
                res.redirect('/')
            }
        })
    },
    create: function(req, res){
        Author.create({title: req.body.title}, (err, data)=>{
            if(err){
                console.log('comment book did not save')
            }else{
                console.log('create data', data);
                res.redirect('/')
            
            }
        })
    },
    getOne: function(req, res){
        Author.findById(req.params.id, (err, data)=>{
            if(err){
                console.log('could not find one controllers');
            }else{
                console.log('found one')
                res.redirect('/')
            }
        })
    },
    getAll: function(req, res){
        Author.find({}, (err, data) => {
            if(err){
                console.log('error grabbing all books')
                res.json({message: "Error", data: err})
    }else{
        res.json({message: "Success", data: data})

    }
})
    },
edit: function(req, res){
    Author.findById(req.params.id, (err, data)=>{
        if(err){
            console.log('could not find by id in edit')
        }else{
            data.update({$push: { title: req.body.tile, publish: req.body.publish} }, (err, bookdata)=>{
                if(err){
                    console.log('could not push books')
                }else{
                    console.log('book data', bookdata)
                    res.redirect('/')
                }
            })

        }
    })
    

}
}