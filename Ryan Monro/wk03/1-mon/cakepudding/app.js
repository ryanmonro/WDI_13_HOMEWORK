// CakePudding

// Game logic
var game = {
  // defaults for new game
  answer: "cake",
  progress: "____".split(''),
  guessedLetters: [],
  wrongGuesses: 0,
  maxWrongGuesses: 10,
  gameWon: false,
  gameOver: false,
  turnsLeft: function(){
    return game.maxWrongGuesses - game.wrongGuesses;
  },
  guess: function(char){
    if (game.gameOver || game.guessedLetters.includes(char)) {
      return;
    }
    game.addToGuessedLetters(char);
    if (game.answer.split('').includes(char)) {
      // update progress
      game.answer.split('').forEach(function(c, i){
        if (c === char) {
          game.progress[i] = char;
        }
      });
    } else {
      game.wrongGuesses++;
    } 
    game.checkProgress();
  },
  addToGuessedLetters: function(char){
    game.guessedLetters.push(char);
    game.guessedLetters.sort();
  },
  checkProgress: function(){
    if (game.wrongGuesses === game.maxWrongGuesses) {
      game.gameOver = true;
      //game.progress = game.answer.split('');
      return;
    }
    // return if any letters are still _
    for (var ind = 0; ind < game.progress.length; ind++){
      if(game.progress[ind] === '_'){
        return;
      }
    }
    game.gameWon = true;
    game.gameOver = true;
  },
  new: function(newAnswer){
    game.wrongGuesses = 0;
    game.guessedLetters = [];
    game.gameOver = false;
    game.gameWon = false;
    game.answer = newAnswer;
    game.progress = "_".repeat(newAnswer.length).split('');
  }
};

// DOM Presentation
var guessesDisplay = document.querySelector('.guesses');
var turnsLeftDisplay = document.querySelector('.turns-left');
var progressDisplay = document.querySelector('.progress');
var statusDisplay = document.querySelector('.status');

var render = function(){
  progressDisplay.textContent = game.progress.join(' ');
  guessesDisplay.textContent = game.guessedLetters.join(' ');
  turnsLeftDisplay.textContent = game.turnsLeft();
  if (game.gameWon) {
    statusDisplay.textContent = "YOU WIN!";
  } else if (game.gameOver){
    statusDisplay.textContent = "GAME OVER";
    setTimeout(function(){
      progressDisplay.textContent = game.answer;
    }, 1500);
  }
}

var newGame = function(){
  statusDisplay.textContent = " ";
  game.new(nouns.random());
  render();
}

document.addEventListener('keydown', function(event){
  if (game.gameOver){
    newGame();
    return;
  }
  var keyPressed = event.key;
  if (keyPressed >= 'a' && keyPressed <= 'z' ) {
    game.guess(keyPressed);
    render();
  }
});

newGame();

/* TODO:
- handle non-alpha chars in word list
- all caps display, typing lowercase
- layout
*/


