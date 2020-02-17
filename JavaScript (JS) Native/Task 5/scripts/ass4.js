var i=-1;
var id_rotate ;
go();
function go () {
    id_rotate = setInterval(function  () {
            i++;
        if(i==5)
            i=0;
        pic(i);
    },1000);

}
function pic(i){
    document.images[i].src = "marbels/marble3.jpg";
    for(v=0;v<5;v++)
    {
        if(v==i)
            v++;
        document.images[v].src = "marbels/marble1.jpg";
    }

}

function reverseO () {
    go();
}

function over () {
    clearInterval(id_rotate);
}


