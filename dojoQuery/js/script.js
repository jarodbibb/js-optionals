var one = new $Dojo('test')

var clicked = function(){
    alert('been clicked')
}

one.click(clicked);

var hoverInn = function(){
    one.myId.style.color = "red"
}
var hoverOutt = function(){
    one.myId.removeAttribute("style")
}

one.hover(hoverInn, hoverOutt);