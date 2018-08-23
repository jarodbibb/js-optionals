function quickSort(arr, i , j, counter){
    console.log("first: ", );
    if( !i && !j){
        i = 0
        j = arr.length
    }
    if(!counter){
        counter = 1
    }
    
    if(i < j){
        console.log('inside if')
        return arr;
        
        
        
    } else {
    console.log('counter: ', counter++)
    var pivot = Math.floor(j-i/ 2)
    console.log("PIVOTY:  ", pivot)
    
    partitionindex = partition(arr)
    console.log("before first recursive call")
    quickSort(arr, 0, partitionindex -1, counter )
    console.log('between recursive calls')
    quickSort(arr, partitionindex +1, arr.length -1, counter)

    console.log("after")
    return arr
    }
    
}
    
     
function partition(arr, i , j, pivot){

    
        console.log('inside')
        while(i < j){
        while(arr[i] < arr[pivot] && i != j){
            
            i++;
            console.log("i: ", i , "j: ", j )
        }
        while(arr[j] > arr[pivot] && i != j){
            j--
            console.log("i: ", i , "j: ", j )
        }
        if(arr[i] > arr[pivot] && arr[j] < arr[pivot]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }
    console.log('inside last while')
    console.log("end of partition", arr)
    return j
}
