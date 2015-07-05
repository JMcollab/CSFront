var canvas = document.getElementById("canvas-skins");
var canvas2 = document.getElementById("canvas-money");
if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(350, 350, 300, 0, 2 * Math.PI);
    ctx.lineWidth = 25;
    ctx.closePath();
    ctx.strokeStyle = "#EEEEEE";
    ctx.stroke();

    var ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.arc(350, 350, 300, 0, 2 * Math.PI);
    ctx2.lineWidth = 25;
    ctx2.closePath();
    ctx2.strokeStyle = "#EEEEEE";
    ctx2.stroke();
}

var numTime = document.getElementById("num-time");
var seconds = 30;
var timerInterval = setInterval(changeTime, 1000);
function changeTime() {
  var stringSeconds = seconds.toString();
  numTime.textContent = stringSeconds;

  ctx.beginPath();
  ctx.arc(350, 350, 300, 1.50001 * Math.PI, 1.5*Math.PI);
  ctx.lineWidth = 25;
  ctx.strokeStyle = "#00b0ff";
  ctx.stroke();
  if (seconds == 0) {
    clearInterval(timerInterval);
  }
  seconds--;
}
