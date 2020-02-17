var vid = document.getElementsByTagName("video")[0];
var sound = document.getElementsByTagName('input')[1];
var speed = document.getElementsByTagName('input')[2];

function play () {
    vid.play();
}

function stop () {
    vid.pause();
}

function zero () {
    vid.currentTime=0;
}

function end () {
    vid.currentTime=vid.duration;
}

function forward () {
    vid.currentTime+=10;
}

function back () {
    vid.currentTime-=10;
}

function mute () {
    vid.muted = true;
}

vid.ontimeupdate = function () {
    var t =0;
    var time_counter = Math.floor(vid.currentTime);
    if (time_counter > 59) 
    {
        t=1;
        time_counter = time_counter - 60;
    }
    document.getElementsByTagName("input")[0].value = vid.currentTime ;
    document.getElementsByTagName("span")[0].innerHTML  
        = t +":" +time_counter+" / 1:50" ;
    console.log(vid.currentTime);
    //
}

sound.onchange = function () {
    vid.muted = false;
    vid.volume = sound.value;
}

speed.onchange = function () {
    vid.playbackRate = speed.value ;
}

