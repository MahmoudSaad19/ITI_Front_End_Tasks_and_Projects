var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

ctx.beginPath();
var grd2 = ctx.createLinearGradient(0, 0, 700, 1000);
grd2.addColorStop(0, "white");
grd2.addColorStop(.8, "dodgerblue");
ctx.fillStyle = grd2;
ctx.arc(canvas.width / 2, canvas.height / 2, 250, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
var grd2 = ctx.createLinearGradient(0, 0, 700, 1000);
grd2.addColorStop(0, "white");
grd2.addColorStop(.5, "blue");
ctx.fillStyle = grd2;
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "white";
ctx.font = "72pt sergio";
ctx.fillText("Mahmoud", 160, 260);