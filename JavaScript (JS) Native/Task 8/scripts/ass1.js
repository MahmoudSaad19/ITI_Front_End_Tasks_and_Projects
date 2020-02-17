function only2 () {
    if(arguments.length >2)
        throw "Parameter Error : You can't enter more than 2 parameters ";
    else if (arguments.length<2)
        throw "Parameter Error : You can't enter less than 2 parameters ";
    else
        document.getElementsByTagName("h1")[0].innerText = "Nice you entered "+arguments[0]+" , "+arguments[1];

}