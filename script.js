//Mouse Tracker is a simple app that tracks the mouse location and generates output
const WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function mouseLocation(e) {
  let xLocation = e.clientX;
  let yLocation = e.clientY;
  let output = "X: " + xLocation + ", Y: " + yLocation;
  console.log("Function 1 called");
  document.getElementsByClassName("coordinates")[0].innerHTML = output;

  //update circle location
  moveCircle(xLocation, yLocation);

}

function moveCircle(xin, yin){
  let circle = document.getElementsByClassName("mySpot")[0];
  let radius = 30; //width = 60px
  console.log("Location called", radius);

  //account for the size of circle
  xin -= radius;
  yin -= radius;

  //mirror mouse location
  let mirroredLocation = mirrorMouse(xin, yin);
  console.log("mirror", mirroredLocation);

  circle.style.left = mirroredLocation.x + "px";
  circle.style.top = mirroredLocation.y + "px";
}

function mirrorMouse(xin, yin){
  let xLocation = WINDOW_WIDTH - xin;
  let yLocation = WINDOW_HEIGHT - yin;
  return {
    x:xLocation,
    y:yLocation
  }
}

// function calculateMousePos(evt) {
//     var rect = canvas.getBoundingClientRect();
//     var root = document.documentElement;
//     var mouseX = evt.clientX - rect.left - root.scrollLeft;
//     var mouseY = evt.clientY - rect.top - root.scrollTop;
//     return {
//         x:mouseX,
//         y:mouseY
//     };
// }

//document.getElementsByClassName("coordinates")[0].innerHTML = "Hello Sexy";
document.addEventListener("mousemove", function(e){mouseLocation(e);}, false);

// window.onload = function(){
//     console.log("onload complete");
//     canvas = document.getElementById("gameCanvas");
//     canvasContext = canvas.getContext("2d");
//
//     var framesPerSecond = 30;
//     setInterval(function() {
//         drawEverything();
//         moveEverything();
//                 }, 1000/framesPerSecond);
//
//     canvas.addEventListener("mousedown", handleMouseClick);
//
//     canvas.addEventListener('mousemove',
//                            function(evt){
//         var mousePos = calculateMousePos(evt);
//         paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
//     })
//
// }
