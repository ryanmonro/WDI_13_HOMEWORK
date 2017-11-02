var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')

const PORT = 8888

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function(request, response){
  var color = randomColor()
  var data = {
    greeting: "",
    color: color,
    compliment: randomCompliment(color),
    font: randomFont()
  }
  response.render('index', data);
})

app.post('/compliment', function(request, response){
  addCompliment(request.body.compliment)
  response.redirect('/')
})

app.get('/:user', function(request, response){
  var name = request.params.user.slice(0,1).toUpperCase();
  name += request.params.user.slice(1);
  var color = randomColor()
  var data = {
    greeting: "Hi " + name + ". ",
    color: color,
    compliment: randomCompliment(color),
    font: randomFont()
  }
  response.render('index', data);
})

app.listen(PORT);

function loadCompliments(){
  var buffer = fs.readFileSync('compliments.json')
  var compliments = JSON.parse(buffer)
  return compliments
}

function addCompliment(compliment){
  var compliments = loadCompliments()
  compliments.push(compliment)
  fs.writeFile('compliments.json', JSON.stringify(compliments))
}

function randomCompliment(color){
  var compliments = loadCompliments();
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
  var fonts = ['Anton', 'Inconsolata', 'Lobster','Saira']
  return randomElement(fonts)
}

function randomElement(arr){
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
}