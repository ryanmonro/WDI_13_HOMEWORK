var captain = "Jack";
var phrase = "Oh " + captain + ", my " + captain + "!";

var souls = 3;
var lifeRafts = 2;
if (souls > lifeRafts) {
  console.log("SOS!");
}

var weekend = ["Saturday"];
weekend.push("Sunday");
weekend.unshift("Friday");
var day = weekend[1];
weekend.shift();

var brain = {
  energyLevel: 10
};
var energy = brain.energyLevel;
brain.dream = "electric sheep";

var rectangleArea = function(length, width){
  return length * width;
};
var area = rectangleArea(3, 4);

// The fruits array is being modified because when arrays are passed to functions, the actual 
// array is passed, as opposed to when literals are passed to functions, only a copy is passed 
// which can be modified without affecting the original variable.