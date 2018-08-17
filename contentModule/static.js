const path = require('path')
module.exports = {
    find: function(url){
        if(url === '/'){
            return('index.html')
        } else if(path.extname(url) ==='.cs' || path.extname(url)=== '.jpg'){
            
            return url.substring(1);
        } else if(path.extname(url)==='.html'){
            return  path.basename(url)
        }

     else {
        return null
    }
}
}