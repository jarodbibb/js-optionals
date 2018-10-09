function MinHeap(){
    this.heap = [undefined];
    this.insert = function(val){
        // if(heap.length === 0){
        //     heap.push('undefined')
        // }
 
        this.heap.push(val)
        parent = Math.trunc(this.heap.length / 2)
        child = this.heap.length-1 
        while(this.heap[parent] > this.heap[child] ){
            temp = this.heap[parent];
            this.heap[parent] = this.heap[child]
            this.heap[child] = temp;
            var temp2 = parent
            parent = temp2/ 2
            child = temp2
            
        }
     return this.heap
    }
    this.remove = function(){
        console.log('heap length', this.heap.length- 1 )
        var temp = this.heap[1]
        console.log('temp ', temp)
        this.heap[1] = this.heap[this.heap.length -1]
        console.log('heap1 newly assigned', this.heap[1])
        this.heap[this.heap.length -1] = temp;
        console.log('last element after new assignment', this.heap[this.heap.lenght-1])
        var poppped = this.heap.pop()
        if(this.heap[2] < this.heap[3]){
            if(this.heap[2]< this.heap[1]){
                temp = this.heap[1]
                this.heap[1] = this.heap[2]
                this.heap[2]= temp
            }
        }else {
            if(this.heap[3]< this.heap[1]){
                var temp = this.heap[1]
                this.heap[1] = this.heap[3]
                this.heap[3] = temp
            }
        }
        console.log(this.heap, poppped)



    }

}

var heapin = new MinHeap()
heapin.insert(2)
heapin.insert(7)
heapin.insert(6)
heapin.insert(5)

function heapify(arr){
    arr.push('undecided')
    var tempa = arr[0]
    arr[0]= arr[arr.length -1 ]
    arr[arr.length -1 ] = tempa
    
    var firstparent = Math.trunc(arr.length / 2 -1 )  
    console.log('parent', firstparent)
    var child1 = firstparent * 2
    console.log('child1', child1)
    var child2 = firstparent *2 + 1 
    while(arr[firstparent] > arr[child1] && child1 || arr[firstparent] > arr[child2] && child2 ){
        if(arr[child1] < arr[child2] && child1){
            var temp = arr[firstparent]
            var temp2 = firstparent
            arr[firstparent] =  arr[child1]
            arr[child1] = temp;
            firstparent = Math.trunc(temp2 / 2)
            child1 = firstparent * 2 
            child2 = firstparent * 2 + 1

        }else if(arr[child2] <= arr[child1] && child2){
            var temp = arr[firstparent]
            var temp2 = firstparent
            arr[firstparent] = arr[child2]
            arr[child2]= temp;
            firstparent = Math.trunc(temp2/ 2)
            child1 = firstparent * 2;
            child2 = firstparent * 2 + 1;
        }
    }
    console.log('finished ', arr)
    return arr
    // var temp = arr[0]
    // arr[0] = arr[arr.length -1 ]
    // arr[arr.length -1 ]
}
// heapify([6,4,7,8,9,2,1,10,3])
heapify([20, 3, 8, 14, 9, 6, 2]);