var topSlider = 0;
var leftSlider = 0;
var rSlider = 365;
var s1;
var s2;
var s3;
var toggleOff = true ;

function go () {
    if (toggleOff)
    {
        toggleOff = false;
        _go();
    }
    else{
        toggleOff = true;
        stop();
    }
}

function reset () {
    stop();
    topSlider = 0;
    leftSlider = 10;
    rSlider = 365;
    document.images[0].style.marginTop = topSlider+"px";
    document.images[1].style.left = leftSlider+"px";
    document.images[2].style.left = rSlider+"px";
}

function _go () {
    document.getElementById("bt1").innerHTML = "Stop";
    clearInterval(s1);
    var flag1 = true;
    s1 = setInterval(function () {
        document.images[0].style.marginTop = topSlider+"px"; // max ="370px"
        if(flag1){
            topSlider+=5;
            if(topSlider > 365) flag1 = false; 
        }else{
            topSlider-=5;
            if(topSlider < 10) flag1 = true; 
        }
    },40);
    clearInterval(s2); 
    var flag2 = true;
    s2 = setInterval(function () {
        document.images[1].style.left = leftSlider+"px";  // max 365+"px"
        if(flag2){
            leftSlider+=5;
            if(leftSlider > 360) flag2 = false; 
        }else{
            leftSlider-=5;
            if(leftSlider < 10) flag2 = true; 
        }
    },40);
    clearInterval(s3);
    var flag3 = true;
    s3 = setInterval(function () {
        document.images[2].style.left = rSlider+"px";  // max 365+"px"
        if(flag3){
            rSlider-=5;
            if(rSlider < 10) flag3 = false; 
        }else{
            rSlider+=5;
            if(rSlider > 360) flag3 = true; 
        }
    },40);
}

function stop () {
    document.getElementById("bt1").innerHTML = " Go ";
    clearInterval(s1);
    clearInterval(s2);
    clearInterval(s3);
}
