function ChangeFont(font) {
    document.getElementById("PAR").style.fontFamily = font;
}

function ChangeAlign(align) {
    document.getElementById("PAR").style.textAlign = align;
}

function ChangeHeight(height) {
    document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace (space) {
   document.getElementById("PAR").style.letterSpacing = space;
}

function ChangeIndent (text) {
    document.getElementById("PAR").style.textIndent = text ;
}

function ChangeTransform (form) {
    document.getElementById("PAR").style.textTransform = form ;
}

function ChangeDecorate (decore) {
    document.getElementById("PAR").style.textDecoration = decore;
}

function ChangeBorder (border) {
    var table = document.getElementsByTagName("td");
    for (i=0 ; i<table.length ; i++)
        table[i].style.border = border;
}

function ChangeBorderColor (color) {
    document.getElementById("Text").style.borderColor = color;
}