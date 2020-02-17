function magic () {
    document.body.appendChild(document.images[0].cloneNode(true));
    document.getElementsByTagName("button")[0].hidden = true;
    document.getElementById("header").align = "right";
    document.getElementById("nav").setAttribute("type","circle");
}