var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

var grd1 = ctx.createLinearGradient(0, 50, 0, canvas.height / 2);
grd1.addColorStop(1, "white");
grd1.addColorStop(0, "skyblue");
ctx.fillStyle = grd1;
ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

var grd2 = ctx.createLinearGradient(0, 0, 0, canvas.height);
grd2.addColorStop(1, "white");
grd2.addColorStop(.5, "#28d11f");
ctx.fillStyle = grd2;
ctx.fillRect(0, 250, canvas.width, canvas.height / 2);

ctx.beginPath();
ctx.moveTo(200, 350);
ctx.lineTo(200, 150);
ctx.lineTo(500, 150);
ctx.lineTo(500, 350);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();