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
        this.heap[1] = this.heap[this.heap.length -1]
        this.heap[this.heap.length -1] = temp;
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
        return this.heap.pop()
        


    }

}

