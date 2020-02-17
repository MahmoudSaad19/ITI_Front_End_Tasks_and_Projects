///create, display and delete cookies
var mycookiedata = []; // associative array
function createCookie (cookieName, cookieValue, expireDate/*in Hours*/)
{
    var date= new Date();
    if (cookieValue != undefined)
        cookieValue;
   if(expireDate == undefined)
        document.cookie=cookieName+"="+cookieValue+";expires="+date;
    else {
        date.setHours(date.getHours()+expireDate);
        document.cookie =cookieName+"="+cookieValue+";expires="+date;
   }
    mycookiedata[cookieName]=cookieValue;
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
    parsecookies();
    return mycookiedata[cookieName] ;
}

function deleteCookie (cookieName)
{
    mycookiedata[cookieName]="";
    document.cookie=cookieName+"=;expires="+new Date();
}
