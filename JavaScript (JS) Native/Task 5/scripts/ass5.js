var i=-1;
var id_rotate ;
var rotate;
go();
function go () {
    clearInterval(rotate);
    id_rotate = setInterval(function  () {
        pic();
    },1000);
    setTimeout(ato,1000);
}
function ato () {
    clearInterval(id_rotate);
    rotate = setInterval(function  () {
        picrev();
    },1000);
    setTimeout(go,1000);
}
function pic(){
    
    for(v=0;v<7;v++)
    {
        document.images[v].src = "marbels/marble3.jpg";
    }
    document.images[3].src = "marbels/marble1.jpg";
}

function picrev(){
    
    for(v=0;v<7;v++)
    {
        document.images[v].src = "marbels/marble1.jpg";
    }
    document.images[3].src = "marbels/marble3.jpg";
}

function reverseO () {
    go();
}

function over () {
    clearInterval(id_rotate);
    picrev();
}


