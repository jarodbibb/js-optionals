var _ = {
    map: function(arr, callback) {
        var result = [];
        for(let i = 0; i < arr.length; i++){
            result.push(callback(arr[i]))
        }
        return result;

      //code here;
    },
    reduce: function(arr, callback) {   
     var collection = 0;
        for(let i = 0; i < arr.length; i++){
            collection += callback(arr[i])
        } 
      // code here;
      return collection;
    },
    find: function(arr, callback) {   
        for(let i= 0; i < arr.length; i++){
            if(callback(arr[i])){
                return arr[i]

            }
        }
        return 'no matches'
        },
      // code here;
    
    filter: function(arr, callback) { 
        var memo = [];
        for(let i = 0; i < arr.length; i++ ){
            if(callback(arr[i])){
                memo.push(callback(arr[i]))
            }
        }
      // code here;
      return memo
    },
    reject: function(arr, callback) { 
      // code here;
      var memo = [];
      for(let i=0; i < arr.length; i++){
            if(!callback(arr[i])){
                memo.push(callback(arr[i]));
            }
      }
      return memo;
    }
  }
  