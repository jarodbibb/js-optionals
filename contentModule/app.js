const http = require('http');
const fs = require('fs');
const path = require('path')
const static_contents = require('./static.js')
server = http.createServer(function(request,response){
    if(request.url!='/favicon.ico'){
        var url_result = static_contents.find(request.url);
        if(url_result){
            fs.readFile(url_result, function(errors, contents){
                response.write(contents);
                response.end();
            });

        } else {
            response.end('file not found');
        }
    }

});
server.list(8000);
console.log("Running in local at port 8000")