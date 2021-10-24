var slideTime = 3; // 3 seconds
var i = 0;
setInterval(function(){
    document.body.style.backgroundPositionX = (i*-0.25)+"px"
    i++;
}, slideTime);