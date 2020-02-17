function enable () {
    //if (document.addEventListener) {
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();}, false);
        //} 
    /*else {
            document.attachEvent('oncontextmenu', function () {
                window.event.returnValue = false;
            });
        }*/
}

function disable ()
{
    document.removeEventListener('contextmenu');
}


