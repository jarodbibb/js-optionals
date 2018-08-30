var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const axios = require('axios');
app.get('/', function(req, res){
    res.render("main");
})
var count = 0
app.get('/people',  function(req, res){
   function gettingStuff(req, res){
    count++
    axios.get("https://swapi.co/api/people/?page=1").then(data => {
        
       res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })// res.redirect('/');
}
gettingStuff(req, res)

})
var arr = []
app.get('/people/next', function(req, res){
    count++
    console.log("counnnnnnnnnnnnting:", count);
    axios.get("https://swapi.co/api/people/?page=" + count).then(data=> {
        arr.push(data.data.results)
        console.log('arrrrr', arr)
    }).catch(error => {
        res.json(error)
    })
})
app.get('/people/previous', function(req, res){
    count--;
    console.log("counnnnnnnnnnnnting:", count);
    axios.get("https://swapi.co/api/people/?page=" + count).then(data=> {
        res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })
})
app.get('/planet',  function(req, res){
    count++
    axios.get("https://swapi.co/api/planets/?page=1").then(data => {
        
        res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })// res.redirect('/');
})
app.get('/planet/next', function(req, res){
    count++;
    console.log("counnnnnnnnnnnnting:", count);
    axios.get("https://swapi.co/api/planets/?page=" + count).then(data=> {
        res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })


})
app.get('/planet/previous', function(req, res){
    count--;
    console.log("counnnnnnnnnnnnting:", count);
    axios.get("https://swapi.co/api/planets/?page=" + count).then(data=> {
        res.json(data.data.results)
    }).catch(error => {
        res.json(error)
    })
})
app.get('/people/all', function(req, res){
    while(count < 5){
        count ++ 
    console.log('testing:', count)
    res.redirect('/people/next')
}
    function getStuffFromApi(req, res){
        
        
        count++
        console.log('in api heyyyyy', count)
        if(count ===2){
        axios.get("https://swapi.co/api/people/?page=", count).then(data=> {
         console.log('en route to there', count)
            if(count < 15){
                console.log("1222222")
                // getStuffFromApi(req, res)
                res.json(data.data.results)
            }
        
        }).catch(error => {
            // res.json(error)
            console.log("error")
        })
    }

//         count++
//  if(count === 3){       axios.get("https://swapi.co/api/people/?page=", count).then(data=> {
//             console.log('en route to there 3', count)
//                if(count < 15){
//                    console.log("33333333")
//                    // getStuffFromApi(req, res)
//                    res.json(data.data.results)
//                }
           
//            }).catch(error => {
//                // res.json(error)
//                console.log("error")
//            })
//         }
//            count++

           axios.get("https://swapi.co/api/people/?page=",count).then(data=> {
               console.log('444444444444444')
                  if(count < 8){
                      console.log("countin")
                      getStuffFromApi(req, res)
                      res.json(data.data.results)
                  }
              
              }).catch(error => {
                  // res.json(error)
                  console.log("error")
              })
            }
            
    
    getStuffFromApi(req, res)
    console.log('calllin me')
    
    
 

})
app.listen(8000, function(){
    console.log("listening on port 8000")
})

