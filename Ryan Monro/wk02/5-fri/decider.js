var heads = 0, tails = 0;
var gameWon = false;
var winningScore = 5;

var tailScore = document.querySelector("#tailScore");
var headScore = document.querySelector("#headScore");
var winnerMessage = document.querySelector("#winnerMessage");
var tossesList = document.querySelector("#tosses");

var coinFlip = function(){
  var result;
  if (Math.random() > 0.5){
    result = "HEADS";
    heads++;
  } else {
    result = "TAILS";
    tails++;
  }
  console.log(result);
  if (heads === winningScore || tails === winningScore) {
    console.log("WINNER!\n\n");
    gameWon = true;
  }
  return result;
}

var displayScores = function(){
  tailScore.textContent = tails;
  headScore.textContent = heads;
  if (gameWon) {
    if (tails === winningScore) {
      winnerMessage.textContent = "TAILS WINS!";
    } else if (heads === winningScore) {
      winnerMessage.textContent = "HEADS WINS!";
    }
  }
}

var resetGame = function(){
    tails = 0;
    heads = 0;
    displayScores();
    gameWon = false;
    winnerMessage.textContent = " ";
    while (tossesList.hasChildNodes()){
      tossesList.removeChild(tossesList.lastChild);
    }
}

var displayFlip = function(result){
  var newLi = document.createElement('li');
  newLi.textContent = result;
  tossesList.appendChild(newLi);
};

var coin = document.querySelector("#coin");
coin.addEventListener("click", function(){
  if (gameWon) {
    resetGame();
  } else {
    var result = coinFlip();
    displayFlip(result);
    displayScores();
  }
});

// setup
displayScores();
