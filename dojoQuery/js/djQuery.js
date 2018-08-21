(function $Dojo(id){
    this.myId = document.getElementById(id);
    this.click = function(callback){
        this.myId.addEventListener('click', callback)
        return this
    }
    this.hover = function(hoverIn, hoverOut){
        this.myId.addEventListener('mouseover', hoverIn);
        this.myId.addEventListener('mouseout', hoverOut);
        return this
    }
})();