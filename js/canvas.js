var canvas = document.getElementById("canvas-skins");
var canvas2 = document.getElementById("canvas-money");
if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    /* square
	var width = 891.500, height= 891.500, divWidth = width/6, divHeight = height/6;
	ctx.fillStyle = "#3e75ad";
	ctx.fillRect(0,0, width, height);
	ctx.clearRect(divWidth, divHeight, width - (2*divWidth), height - (2*divHeight));
	console.log(height-divHeight);
	console.log(width-divWidth);
	ctx.font = "80px 'RobotoDraft'";
	ctx.fillText("Hiya 7/25", 400, 500);
	*/

    ctx.beginPath();
    ctx.arc(350, 350, 300, 0, 2.5 * Math.PI);
    ctx.lineWidth = 25;
    ctx.closePath();
    ctx.strokeStyle = "#EEEEEE";
    ctx.stroke();

    var ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.arc(350, 350, 300, 0, 2.5 * Math.PI);
    ctx2.lineWidth = 25;
    ctx2.closePath();
    ctx2.strokeStyle = "#EEEEEE";
    ctx2.stroke();
}
