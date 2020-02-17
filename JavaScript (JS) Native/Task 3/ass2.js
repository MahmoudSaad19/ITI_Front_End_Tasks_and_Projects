var value;
var sum =0;
do{
value = parseInt(prompt("Enter a number : "));
sum +=value;
}while(value != 0);

document.write("<b><font color ='red'>You entered many numbers and thier sum = </font></b>"+sum);