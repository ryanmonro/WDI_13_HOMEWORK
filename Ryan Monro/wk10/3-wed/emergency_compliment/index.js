var express = require('express');
var app = express();

const PORT = 8888;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  var data = {
    greeting: "",
    color: randomColor(),
    compliment: randomCompliment(),
    font: randomFont()
  }
  response.render('index', data);
});

app.get('/:user', function(request, response){
  var name = request.params.user.slice(0,1).toUpperCase();
  name += request.params.user.slice(1);
  var data = {
    greeting: "Hi " + name + ". ",
    color: randomColor(),
    compliment: randomCompliment(),
    font: randomFont()
  }
  response.render('index', data);
})

app.listen(PORT);

function randomCompliment(){
  var compliments = 
  [
    'Your indenting shows how mindful you are of the well-being of those around you.',
    'You had me at box-sizing: border-box.',
    'Your variable names are like a window into your mind when you wrote the app.',
    'Awesome...how did you do that? Is it all in a div or something?',
    'Mistyrose, right? Sweeeeet.',
    "I can't believe you found lunch so cheap, good, fast and close to campus."
  ]
  return randomElement(compliments);
}

function randomColor(){
  var colors = 
  [
    'papayawhip',
    'mistyrose',
    'mintcream',
    'goldenrod',
    'tomato'

  ]
  return randomElement(colors);
}

function randomFont(){
  var fonts = ['Anton', 'Inconsolata', 'Lobster','Saira'];
  return randomElement(fonts);
}

function randomElement(arr){
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}