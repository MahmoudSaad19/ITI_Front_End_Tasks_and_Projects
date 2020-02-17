// name , telephone num , mobile num , email 
//should be any charter 
nameregex = /^[a-zA-Z]+$/
do{
var name = prompt("Enter your name : ");
}while(!nameregex.test(name));

//should be 8 digits only 
teleregex = /^[0-9]{8}$/
do{
    var telephoneNumber = prompt("Enter your telephone number : ");
}while(!teleregex.test(telephoneNumber));

//should be validated as moblie number 012*******
mobregex =/^01[0-9]{9}$/
do{
    var moblieNumber = prompt("Enter your Mobile number : ");
}while(!mobregex.test(moblieNumber));

// should be validated as email 
emailregex = /^[a-zA-Z]+@[a-z]{1,8}\.com|net|org$/
do{
    var email = prompt("Enter your Email : ");
}while(!emailregex.test(email));

var color = prompt("Enter color letter Red r , Green g , Blue b");
if(color=='r')
    color="red";
else if (color == 'g')
    color = "green";
else if (color == 'b')
    color = "blue";
else
    color = "black";



document.write("Welcome dear : ".fontcolor(color)+name);
document.write("<br>Your telepone number is : ".fontcolor(color)+telephoneNumber);
document.write("<br>Your mobile number is : ".fontcolor(color) +moblieNumber);
document.write("<br>Your email is : ".fontcolor(color) +email);