//Mouse Tracker is a simple app that tracks the mouse location and generates output
const WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function moveCircle(e) {
  let circle = document.getElementsByClassName("mySpot")[0];
  let mouseXLocation = e.clientX;
  let mouseYLocation = e.clientY;
  let mirroredX = WINDOW_WIDTH - mouseXLocation;
  let mirroredY = WINDOW_HEIGHT - mouseYLocation;
  let output = "X: " + mouseXLocation + ", Y: " + mouseYLocation;

  document.getElementsByClassName("coordinates")[0].innerHTML = output;

  //offset for the size of circle
  //size is 60px, 30 is radius, radius is split in half to 15 for
  //each side, other wise circle dissapears before mouse hits edge
  mouseXLocation -= 15; //radius;
  mouseYLocation -= 15; //radius;
  mirroredX -= 15;
  mirroredY -= 15;

  //update circle location
  circle.style.left = mirroredX + "px";
  circle.style.top = mirroredY + "px";

  //set size
  let output2 = mouseXLocation + mouseYLocation;
  let size = document.getElementsByClassName("size")[0];
  size.innerHTML = output2;

  //set color
  let centerX = mouseXLocation - mirroredX;
  let centerY = mouseYLocation - mirroredY;
  //console.log("CenterX: " + centerX + " CenterY: " + centerY);
  if(centerX <= 45 &&
    centerX >= -15 &&
    centerY <= 45 &&
    centerY >= -15){
    circle.style.backgroundColor = "red";
  } else {
    circle.style.backgroundColor = "#bcc3f9";
  }
}

function m2oveCircle(xin, yin){
  let circle = document.getElementsByClassName("mySpot")[0];
  let radius = 30; //width = 60px
  //console.log("Location called", radius);

  //account for the size of circle
  xin -= radius;
  yin -= radius;

  //mirror mouse location
  let mirroredLocation = mirrorMouse(xin, yin, radius);
  //console.log("mirror", mirroredLocation);

  circle.style.left = mirroredLocation.x + "px";
  circle.style.top = mirroredLocation.y + "px";
}

function mirrorMouse(xin, yin){
  let xLocation = WINDOW_WIDTH - xin;
  let yLocation = WINDOW_HEIGHT - yin;

  if (xLocation <= zin && yLocation <= zin){
    console.log("COLOR CHANGED");
    document.getElementsByClassName("mySpot")[0].style.backgroundColor = "red";
  }

  return {
    x:xLocation,
    y:yLocation
  }
}

//document.getElementsByClassName("coordinates")[0].innerHTML = "Hello Sexy";
document.addEventListener("mousemove", function(e){
  let circle = document.getElementsByClassName("mySpot")[0];
  circle.style.width = "60px";
  circle.style.height = "60px";
  moveCircle(e);
}, false);
