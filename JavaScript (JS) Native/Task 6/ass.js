function register()
{
    var username = document.getElementsByTagName("input")[0].value.trim() ;
    validateUserName(username);    
}

function validateUserName (word){
    nameregex = /^[a-zA-Z]+$/;
    if(word == "undefined")
        alert("You need to Enter your Name ");
    else if (!nameregex.test(word))
        alert("You need to Enter a valid username");
    else
        {
            createCookie("username",word,1);
            saveInfo();
        }      
}

function saveInfo () {
    var age = document.getElementsByTagName("input")[1].value ;
    var gender ; 
    if (document.getElementsByTagName("input")[2].checked) //male
        gender = "male" ;
    else if(document.getElementsByTagName("input")[3].checked) //female
        gender = "female" ;
    var color = document.getElementsByTagName("select")[0].selectedOptions[0].value;
    createCookie("age",age,1);
    createCookie("gender",gender,1);
    createCookie("color",color,1);
    createCookie("counter",0,1);
    location.replace("welcomeP.html");
}

