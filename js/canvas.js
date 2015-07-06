var canvas = document.getElementById("canvas-skins");
var canvas2 = document.getElementById("canvas-money");
var startTimer = document.getElementById("start-canvas-timer");
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
var secondsGlobal = seconds = 5; //Set round time here
var frames = 60;
var chunks = (2 / secondsGlobal)/frames; //Stroke space required for each second
var endValue = 0; //What percent of the circle stroke is currently at

startTimer.addEventListener("click", doTheTimerThing);

function doTheTimerThing() {
  var numInterval = setInterval(timeNumber, 1000);
  var circleInterval = setInterval(timeCircle, (1000/frames));
}

function timeNumber() {
  seconds--;
  var stringSeconds = seconds.toString();
  numTime.textContent = stringSeconds;
}

function timeCircle() {
  endValue += chunks;
  ctx.beginPath();
  ctx.arc(350, 350, 300, 1.5 * Math.PI, (endValue+1.5) * Math.PI);
  ctx.lineWidth = 25;
  ctx.strokeStyle = "#00b0ff";
  ctx.stroke();
}
