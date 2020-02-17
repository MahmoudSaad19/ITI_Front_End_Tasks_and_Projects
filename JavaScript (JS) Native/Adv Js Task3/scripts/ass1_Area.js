var Shape = function(width ,height){
    if(this.constructor == Shape)
        throw "Object Error you can't create object from shape.";
    this.width = width ;
    this.height = height;
}
Shape.prototype.toString=function(){
    throw "Empty";
}

var Rectangle = function ( width ,height) {
    Shape.call(this,width ,height);
    if (this.constructor == Rectangle){
        //console.log(Rectangle.counter);
        if (Rectangle.counter<1)
            Rectangle.counter++;
        else
            throw "Rectangle Error : You can't create more than one Rectangle";
    }
        
}
Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;

Rectangle.prototype.calcArea = function () {
    return "Area = "+this.height*this.width ;
};

Rectangle.prototype.CalcPerimeter = function () {
    return "perimeter = "+(this.height+this.width)*2 ;
};

Rectangle.prototype.toString=function (){
    console.log("hello");
    return "Object Rectangle has width of "+this.width +
        " and height of "+this.height + " \n"+this.calcArea()
        +" , "+this.CalcPerimeter() ;
}

Rectangle.counter =0;

Rectangle.prototype.getObjectNumber = function () {
    return "Number of Objects = "+Rectangle.counter;
}


var Square = function (_length) {
    Rectangle.call(this,_length,_length);
    if (this.constructor == Square){
        //console.log(Square.counter);
        if (Square.counter<1)
            Square.counter++;
        else
            throw "Square Error : You can't create more than one Square";
    }
}

Square.prototype=Object.create(Rectangle.prototype);
Square.prototype.constructor=Square;

Square.counter =0;



