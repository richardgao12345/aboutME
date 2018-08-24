
	// Setup directly from canvas id:
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth + 100;
canvas.height = window.innerHeight + 200;
ctx = canvas.getContext('2d');
document.addEventListener("mousemove", mouseMove, false)
document.addEventListener("mouseleave", mouseLeave, false)
document.addEventListener("mouseenter", mouseEnter, false)
window.addEventListener('resize', resizeCanvas, false);
var cubeX = 80;
var cubeY = 110;
var mousePositionx;
var mousePositiony;
var inCanvas = true;
var xVelocity = 0.1;
var yVelocity = 0.1;
var speed = 2.5
var angle = 45

cubeX = 80;
cubeY = 110;
cubeWidth = 50;
cubeHeight = 50;
cubeLength = 50;
color = '#ff8d4b';
function resizeCanvas() {
    canvas.width = window.innerWidth + 100;
    canvas.height = window.innerHeight + 200;
}

function mouseMove(event) {
    mousePositionx = event.x
    mousePositiony = event.y
}
function mouseLeave() {
    inCanvas = false;
}
function mouseEnter() {
    inCanvas = true;
}
function calculateLocation() {
    if (inCanvas == true) {
        var dx = mousePositionx - cubeX;
        var dy = mousePositiony - cubeY;
    }
    else {
        var dx = 80 - cubeX;
        var dy = 110 - cubeY;
    }
    if ((dx > 10 || dy > 10) || (dx < -10 || dy < -10)) {
        angle = Math.atan2(dy,dx);
        xVelocity = Math.cos(angle) * speed;
        yVelocity = Math.sin(angle) * speed;
        cubeX += xVelocity;
        cubeY += yVelocity;
    }

}

function drawCube(x, y, wx, wy, h, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, -10);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 10);
    ctx.strokeStyle = shadeColor(color, 50);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    ctx.fill();
}
function shadeColor(color, percent) {
    color = "ff8d4b"
    var num = parseInt(color, 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }
// Animation function
function draw(){

  // clear the canvas
  ctx.clearRect(-100, -100, canvas.width, canvas.height);
  
  // Wobble the cube using a sine wave
  var wobble = Math.sin(Date.now()/250)*window.innerHeight/50;
  calculateLocation();
  
  // draw the cube
  drawCube(
    cubeX,
    cubeY + wobble,
    Number(cubeWidth),
    Number(cubeHeight),
    Number(cubeLength),
    color
  );
  requestAnimationFrame(draw);
}
draw();
