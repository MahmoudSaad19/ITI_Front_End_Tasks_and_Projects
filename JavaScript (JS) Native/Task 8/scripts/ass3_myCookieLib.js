///create, display and delete cookies
var mycookiedata = []; // associative array
function createCookie (cookieName, cookieValue, expireDate/*in Hours*/)
{
    if (arguments.length == 0)
        throw " Library Error : You can't call the function without passing any parameters";
    else if (arguments.length > 3)
        throw "Library Error : You can't call the function with more than 3 parameters";
    else if (arguments.length < 2)
        throw "Library Error : You can't call the function with less than 2 parameters";
    else {
    var date= new Date();
    if (cookieValue != undefined)
        cookieValue;
   if(expireDate == undefined)
        document.cookie=cookieName+"="+cookieValue+";expires="+date;
    else {
        date.setHours(date.getHours()+expireDate);
        document.cookie =cookieName+"="+cookieValue+";expires="+date;
   }
    mycookiedata[cookieName]=cookieValue;}
}

function displayAllCookies () {
    parsecookies();
    return mycookiedata ;
}
    
function parsecookies () {
    var allcookies = document.cookie.split(';');
    for (i=0 ; i<allcookies.length ; i++)
    {
        mycookiedata[ allcookies[i].split('=')[0].trim()] = //key
            allcookies[i].split('=')[1].trim() ; // value
    }
}

function getCookie (cookieName)
{
    if (arguments.length == 0)
        throw " Library Error : You can't call the function without passing any parameters";
    else if (arguments.length > 1)
        throw "Library Error : You can't call the function with more than 1 parameter";
    else 
    {
        parsecookies();
        return mycookiedata[cookieName] ;
    }
}
    

function deleteCookie (cookieName)
{
    if (arguments.length == 0)
        throw " Library Error : You can't call the function without passing any parameters";
    else if (arguments.length > 1)
        throw "Library Error : You can't call the function with more than 1 parameter";
    else 
    {
    mycookiedata[cookieName]="";
    document.cookie=cookieName+"=;expires="+new Date();}
}
