var nameHolder = getCookie("username");
var color = getCookie("color");
var counter = parseInt(getCookie("counter"));
counter +=1;
createCookie("counter",counter,1);  
showData();

function showData () {
    showPic();
    document.getElementsByTagName("span")[0].innerHTML = "<span style='color:"+color+"'>"+nameHolder+"</span>";
    document.getElementsByTagName("span")[2].innerHTML = "<span style='color:"+color+"'>"+counter+"</span>";  
}

function showPic () {
    if(getCookie("gender") == "male")
        document.images[0].src="images/1.jpg";
    else if (getCookie("gender") == "female" )
        document.images[0].src="images/2.jpg";
    else
        document.images[0].src="";
}