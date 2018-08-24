function quickSort(arr, i , j){
 
    if(arr.length > 1){
      
      var pivotindex = partition(arr, i, j)
      
      console.log('partition index: ', pivotindex);
      console.log("before if little i: ", i  + "j: " + j )
      if(i < pivotindex - 1){
        console.log("first i: ", i  + "j: " + j )
        quickSort(arr, i, pivotindex-1 )
      }
      console.log("after i: ", i  + "j: " + j )
      if(pivotindex < j){
        console.log("second i: ", i  + "j: " + j )
        quickSort(arr, pivotindex, j)
      }
    }
    
    return arr
}
    
     
function partition(arr, i , j){
    
    var pivot = arr[Math.floor((i+j) / 2)]
      
    while (i <= j){
      while(arr[i] < pivot){
        
        i++;
      }
      while(arr[j] > pivot){
        j--
      }
      
      if(i<=j){
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
      }
      console.log('updated arr: ', arr );
    }
    console.log("iiiiii", i +" j" + j)
    return i
    
}
quickSort([4,8,5,7,1,6,10,2,3,9],0 ,9)
