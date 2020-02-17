var text = document.getElementsByTagName("p")[0] ;

var red = document.getElementsByTagName('input')[0] ;
var green = document.getElementsByTagName('input')[1];
var blue = document.getElementsByTagName('input')[2];

red.onchange = function () {
    text.style.color = "rgb("+red.value+","+green.value+","+blue.value+")";
}

green.onchange = function () {
    text.style.color = "rgb("+red.value+","+green.value+","+blue.value+")";
}

blue.onchange = function () {
    text.style.color = "rgb("+red.value+","+green.value+","+blue.value+")";
}