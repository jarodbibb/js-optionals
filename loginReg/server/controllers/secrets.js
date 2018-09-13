const mongoose = require('mongoose')
const User = mongoose.model('User');
const Secret = mongoose.model('Secret');
const Comment = mongoose.model('Comment');

const bcrypt = require('bcrypt');
module.exports = {
    delete: function(req, res){
        Secret.remove({_id: req.params.id}, function(err, data){
            if(err){
                console.log('did not delete')
            }else{
                res.redirect('/success/'+ req.params.userId)
            }
        })
    },
    createComs: function(req, res){
        Comment.create({ comment: req.body.note }, (err, commentData) => {
            if (err) {
                console.log('comment did commentData save')
            } else {
    
                console.log('commentDatae', commentData)
                var str = req.params.id;
                console.log('id req params_id')
                // Secret.findOneAndUpdate( str,{$push: {comments: commentData}},{new: true}, (err, data)=>{
                //         console.log('find one and update secret data', data )
                //         console.log('find one upsdate not', commentData)
                //     if(err){
                //         console.log('did not load')
                //     }else{
                //                     res.render('yes', {secret: data})
                //             }
                //         } )
                Secret.findById(str, (err, data) => {
                    console.log('data from find by id ', data)
                    if (err) {
                        console.log('findbyid error')
                    } else {
                        data.update({ $push: { comments: commentData } }, (err, secretData) => {
                            if (err) {
                                console.log('update not working')
                            } else {
                                console.log("testing length", data)
                                res.redirect('/getSecret/' + data._id)
                            }
                        })
                    }
                })
            }
        })
    
    },
    getOne: function(req, res){
        var str = req.params.id;
        // var string = toString(req.params.id)
        console.log('req params id', str.substring(1))
    
        Secret.findById(str, (err, data) => {
            if (err) {
                console.log('did not load find secret by id')
            } else {
                console.log('getting data for secrets should be only one', data)
                res.render('yes', { secret: data })
            }
        })
    },
    makeSec: function(req, res){
        console.log('req.session.user_id', req.params.id)
        var userId = req.params.id
        // var testing = req.session.user_id
        // req.session.user_id = testing
        // console.log('req.session.user_id after', req.session.user_id)
    
        Secret.create({ secret: req.body.secret, user: userId}, (err, secret) => {
            if (err) {
                console.log('Secret did not save correctly')
            } else {
                console.log('secret data', secret)
    
    
                res.redirect('/success/'+ userId)
    
            }
        })
    },
    getAllSec: function(req, res){
        console.log('req.session.user_id success', req.params.id)
        var userId = req.params.id
            Secret.find({}, (err, data) => {
                if (err) {
                    console.log('could not find secrets')
                } else {
                    console.log('user id ', userId)
                    // var testing = req.session.user_id
                    // req.session.user_id = testing
                    res.render('success', { secrets: data, userI: userId })
                }
            })
    },
    login: function(req, res){
        User.findOne({ email: req.body.email }, (err, user) => {
            console.log('find a user', user)
            if (err) {
                console.log("Error, finding user")
            } else {
                var hashed_p;
                //    bcrypt.hash(req.body.password, 10, function(err, hash){
                //        console.log('checking hash', hash)
                //        hashed_p = hash
                bcrypt.compare(req.body.password, user.password, function (err, data) {
                    if (data) {
                        console.log('they matched')
                        req.session.user_id = user._id;
                        req.session.email = user.email
                        var data = false;
                        res.redirect('/success/'+ user._id)
    
                    } else {
                        console.log('comparison did not work')
                        res.redirect('/')
                    }
    
                })
    
                //    })
    
            }
        })
    },
    register: function(req, res){
        bcrypt.hash(req.body.password, 10)
        .then(hashed_password => {
            console.log('success hasing password', hashed_password)
            User.create({ first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: hashed_password, birthdate: req.body.birthdate }, (err, user) => {
                // , }
                if (err) {
                    console.log('Could not create new user')
                    res.redirect('/')
                } else {
                    console.log('users: ', user.first_name)
                    req.session.user_id = user._id;
                    req.session.email = user.email;
                    req.session.first_name = user.first_name;
                    console.log('creating user and saving in session', req.session.user_id)
                    var data = false;

                    res.redirect('/success/'+ user._id)
                }
            })

        })
        .catch(error => {
            console.log('error hasing password')

        });
    },   
    

}