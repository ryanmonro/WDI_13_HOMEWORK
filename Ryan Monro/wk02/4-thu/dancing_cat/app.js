var walkId;
var catX;
var walkLength = 1;
var walkInterval = 20;
var catFacingLeft = true;
var catWidth = 296;

var maxX = 600;
var minX = 0;


var walk = function(){
  stopButton.disabled = false;
  speedUpButton.disabled = false;
  slowDownButton.disabled = false;
  startButton.disabled = true;
  walkId = setInterval(function(){
    var newX = catX + walkLength;
    updateCatX(newX);
    if (catX >= window.innerWidth - catWidth || catX <= minX) {
      flipCat();
    }
  }, walkInterval);
};

var stopWalking = function(){
  stopButton.disabled = true;
  speedUpButton.disabled = true;
  slowDownButton.disabled = true;
  startButton.disabled = false;
  clearInterval(walkId);
};

var updateCatX = function(x){
  catX = x;
  cat.style.left = catX + "px";  
};

var increaseSpeed = function(){
  if (walkLength >= 0) {
    walkLength++;
  } else {
    walkLength--;
  }
};

var decreaseSpeed = function(){
  if (walkLength === 1 || walkLength === -1) { 
    stopWalking();
    return;
  }
  if (walkLength > 0) {
    walkLength--;
  } else {
    walkLength++;
  }
};

var flipCat = function(){
  // change direction of walk
  walkLength = walkLength - 2 * walkLength;
  if (catFacingLeft) {
    cat.style.transform = "scaleX(-1)"
    catFacingLeft = false;
  }
  else {
    cat.style.transform = "scaleX(1)"
    catFacingLeft = true;
  }
}

var cat = document.querySelector("img#cat");
updateCatX(0);
var startButton = document.querySelector("#start-button");
var speedUpButton = document.querySelector("#speedup-button");
var slowDownButton = document.querySelector("#slowdown-button");
var stopButton = document.querySelector("#stop-button");

startButton.addEventListener('click', walk);
stopButton.addEventListener('click', stopWalking);
speedUpButton.addEventListener('click', increaseSpeed);
slowDownButton.addEventListener('click', decreaseSpeed);

