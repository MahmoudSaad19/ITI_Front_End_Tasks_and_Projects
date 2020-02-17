function add () {
    var sum =0;
    for (i=0 ; i<arguments.length ; i++)
    {
       if(isNaN(arguments[i]))
            throw "Input Type Error You Can enter only numbers";
        else
            sum+=arguments[i];
    }
    console.log("Sum = "+sum); 
}