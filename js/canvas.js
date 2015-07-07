var canvas = document.getElementById("canvas-skins");
var canvas2 = document.getElementById("canvas-money");

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(350, 350, 300, 0, 2 * Math.PI);
    ctx.lineWidth = 30;
    ctx.closePath();
    ctx.strokeStyle = "#EEEEEE";
    ctx.stroke();
/*
    var ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.arc(350, 350, 300, 0, 2 * Math.PI);
    ctx2.lineWidth = 30;
    ctx2.closePath();
    ctx2.strokeStyle = "#EEEEEE";
    ctx2.stroke();
    */
}

var numTime = document.getElementById("num-time");
var secondsGlobal = seconds = 10; //Set round time here
var frames = 60; //Fps at which circle fills
var chunks = (2 / secondsGlobal) / frames; //Stroke space required for each second
var endValue = 0; //What percent of the circle stroke is currently at
var stringSecondsGlobal = seconds.toString();
numTime.textContent = stringSecondsGlobal;

var numInterval = setInterval(timeNumber, 1000);
var circleInterval = setInterval(timeCircle, (1000 / frames));

function timeNumber() {
    seconds--;
    var stringSeconds = seconds.toString();
    numTime.textContent = stringSeconds;
}

function timeCircle() {
    endValue += chunks;
    ctx.beginPath();
    ctx.arc(350, 350, 300, 1.5 * Math.PI, (endValue + 1.5) * Math.PI);
    ctx.lineWidth = 30;
    ctx.strokeStyle = "#2dbfa2";
    ctx.stroke();
    if (seconds == 0) {
        clearInterval(numInterval);
        setTimeout(function() {
            clearInterval(circleInterval);
        }, 1000);
    }
}
