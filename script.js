//Mouse Tracker is a simple app that tracks the mouse location and generates output
const WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const HALF_WIDTH = WINDOW_WIDTH/2;
const HALF_HEIGHT = WINDOW_HEIGHT/2;
var output1 = document.getElementsByClassName("screen-info")[0];
var myCircle = document.getElementsByClassName("mySpot")[0];

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

  //set color
  let centerX = mouseXLocation - mirroredX;
  let centerY = mouseYLocation - mirroredY;

  //console.log("CenterX: " + centerX + " CenterY: " + centerY);
  if(centerX <= 45 &&
    centerX >= -15 &&
    centerY <= 45 &&
    centerY >= -15){
    circle.style.backgroundColor = "red";
    //circle.style.boxShadow = " 0px 0px 50px rgba(0, 0, 0, 1), 0px 0px 50px rgba(153,0,0, .7)";

  } else {
    circle.style.backgroundColor = "#bcc3f9";
  }
}


function adjustGlow(e){
  let circle = document.getElementsByClassName("mySpot")[0];
  let mouseXLocation = e.clientX;
  let mouseYLocation = e.clientY;

  let myRatio = HALF_WIDTH/10;

  //Find which half of screen on X Axis
  if(mouseXLocation < HALF_WIDTH){
    //console.log("Left Half of Screen", mouseXLocation);

    //ratio assumes HALF_WIDTH == 100%,
    //then assignes mouseXLocation a percent value between 1 and 100
    let mathX = Math.floor(100 * mouseXLocation / HALF_WIDTH);
    let mathY = Math.floor(100 * mouseYLocation / HALF_HEIGHT);

    console.log("In Q1", mathX);
    circle.style.boxShadow = "0px 0px "+ mathX + "px rgba(188, 195, 249, .9), 0px 0px "+ mathY + "px rgba(188, 195, 249, .9)";
    //0px 0px 40px rgba(0,173,255, .9),
  } else {
    //console.log("right half of screen", mouseXLocation);
    let mathX2 = Math.floor(100 * (mouseXLocation - HALF_WIDTH) / HALF_WIDTH);
    let mathY2 = Math.floor(100 * (mouseYLocation - HALF_HEIGHT) / HALF_HEIGHT);

    console.log("BEFORE " + mathX2 + " : " + mathY2);


    //invert percentage --- turn 90% into 10%
    mathX2 = (mathX2 * -1) + 100;
    mathY2 = (mathY2 * -1) + 100;

    console.log("AFTER " + mathX2 + " : " + mathY2);

    circle.style.boxShadow = "0px 0px "+ mathX2 + "px rgba(188, 195, 249, .9), 0px 0px "+ mathY2 + "px rgba(188, 195, 249, .9)";
  }
}

//document.getElementsByClassName("coordinates")[0].innerHTML = "Hello Sexy";
document.addEventListener("mousemove", function(e){
  //height/width are set once mouse enters screen. Before then the circle is invisible
  myCircle.style.width = "60px";
  myCircle.style.height = "60px";
  moveCircle(e);
  adjustGlow(e);
}, false);

let message = "Screen X: " +
WINDOW_WIDTH + "<br/>Screen Y: " +
WINDOW_HEIGHT + "<br/>Half X: " +
HALF_WIDTH + "<br/>Half Y: " +
HALF_HEIGHT +
"<br/><br/>Half / 10: " + Math.floor(HALF_HEIGHT/10);

output1.innerHTML = message;
