var Rectangle = function (width ,height ) {
    this.width = width ;
    this.height = height ;
    Rectangle.counter++;
}

Rectangle.prototype.calcArea = function () {
    return "Area = "+this.height*this.width ;
};

Rectangle.prototype.CalcPerimeter = function () {
    return "perimeter = "+(this.height+this.width)*2 ;
};

Rectangle.prototype.toString=function (){
    return "Object Rectangle has width of "+this.width +
        " and height of "+this.height + " \n"+this.calcArea()
        +" , "+this.CalcPerimeter() ;
}

Rectangle.counter =0;

Rectangle.prototype.getObjectNumber = function () {
    return "Number of Objects = "+Rectangle.counter;
}