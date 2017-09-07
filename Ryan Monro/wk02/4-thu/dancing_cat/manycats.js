var stackOfCats = [];
var catsWalking = false;

var emptyCat = function(){ 
  return {
    speed: 1,
    xDirection: 1,
    yDirection: 1,
    walkInterval: 20,
    facingLeft: true,
    width: 296,
    height: 296,
    updateX: function(x){
      this.xPos = x;
      this.image.style.left = x + "px"; 
    },
    updateY: function(y){
      this.yPos = y;
      this.image.style.top = y + "px";
      this.image.style.zIndex = y;
    },
    stopWalking: function(){
      clearInterval(this.walkId);
    },
    increaseSpeed: function(){
      this.speed++;
    },
    decreaseSpeed: function(){
      if (this.speed > 0) {
        this.speed--;
      }
    },
    checkFlip: function(){
      if (this.xPos >= window.innerWidth - this.width || this.xPos <= 0) {
        // change direction of walk
        this.xDirection = this.xDirection - 2 * this.xDirection;
        if (this.facingLeft) {
          this.image.style.transform = "scaleX(-1)"
          this.facingLeft = false;
        }
        else {
          this.image.style.transform = "scaleX(1)"
          this.facingLeft = true;
        }
      }
      if (this.yPos >= window.innerHeight - this.height || this.yPos <= 50) {
        this.yDirection = this.yDirection - 2 * this.yDirection;
      }
    }
  };
};

var generateCat = function(){
  var catIndex = stackOfCats.length;
  var cat = emptyCat();
  // create img element for new cat
  cat.image = document.createElement("img");
  cat.image.className = "catImage";
  cat.image.id = "cat" + catIndex
  cat.image.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  // randomise initial direction of cat
  if (Math.random() > 0.5) {
    cat.xDirection = -1;
    cat.image.style.transform = "scaleX(-1)"
    cat.facingLeft = false;
  }
  if (Math.random() > 0.5) {
    cat.yDirection = -1;
  }
  // randomise cat speed
  cat.speed = Math.ceil(Math.random() * 3);
  // put cat at a random x and y position
  var left = Math.floor(Math.random() * (window.innerWidth - cat.width));
  var top = 50 + Math.floor(Math.random() * (window.innerHeight - cat.height - 50));
  cat.updateX(left);
  cat.updateY(top);

  // add cat image to DOM
  document.body.appendChild(cat.image);
  return cat;
};

var spawn = function(){
  var cat = generateCat();
  if (catsWalking){
    startWalking(cat);
  }
  stackOfCats.push(cat);
}

var walk = function(){
  stopButton.disabled = false;
  speedUpButton.disabled = false;
  slowDownButton.disabled = false;
  startButton.disabled = true;
  stackOfCats.forEach(function(cat){
    startWalking(cat);
  });
  catsWalking = true;
};

var startWalking = function(cat){
  cat.walkId = setInterval(function(){
    var newX = cat.xPos + cat.speed * cat.xDirection;
    var newY = cat.yPos + cat.speed * cat.yDirection;
    cat.updateX(newX);
    cat.updateY(newY);
    cat.checkFlip();
  }, cat.walkInterval);
}

var stopWalking = function(){
  stopButton.disabled = true;
  speedUpButton.disabled = true;
  slowDownButton.disabled = true;
  startButton.disabled = false;
  stackOfCats.forEach(function(cat){
    cat.stopWalking();
  });
  catsWalking = false;
};

var increaseSpeed = function(){
  stackOfCats.forEach(function(cat){
    cat.increaseSpeed();
  });
}

var decreaseSpeed = function(){
  stackOfCats.forEach(function(cat){
    cat.decreaseSpeed();
  });
}

var startButton = document.querySelector("#start-button");
var speedUpButton = document.querySelector("#speedup-button");
var slowDownButton = document.querySelector("#slowdown-button");
var stopButton = document.querySelector("#stop-button");
var spawnButton = document.querySelector("#spawn-button");

startButton.addEventListener('click', walk);
stopButton.addEventListener('click', stopWalking);
speedUpButton.addEventListener('click', increaseSpeed);
slowDownButton.addEventListener('click', decreaseSpeed);
spawnButton.addEventListener('click', spawn);


// spawn a cat to begin
spawn();
