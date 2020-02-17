    //Alert some text if the user presses the Escape key:
    /*
function myFunction(event) {
  var x = event.keyCode;
  if (x == 27) {  // 27 is the ESC key
    alert ("You pressed the Escape key!");
  }
}*/
function uniCharCode(event) {
  var char = event.which || event.keyCode;
  alert("ASCII = "+char);
}

function uniKeyCode(event) {
  var key = event.keyCode;
    //alt 18
    // ctrl key 17 
    //shift key 16
    if(key==16)
        alert("you pressed Shift key ");
    else if (key==17)
        alert("you pressed Ctrl key ");
    else if (key==18)
        alert("you pressed Alt key ");
}