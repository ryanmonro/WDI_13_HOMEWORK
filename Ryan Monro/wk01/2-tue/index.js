var name = "";
var menuChoice = "";
while(name === ""){
  name = prompt("What is your name?");
} 
console.log("Hello, " + name + "."); 
while(menuChoice === ""){
  menuChoice = prompt("What would you like to order? On the menu tonight: steak, fruit salad, tofurkey, pork chops.");
}
if (menuChoice === "tofurkey" || menuChoice === "fruit salad") {
  console.log("This cuisine is vegan friendly.");
} else {
  console.log("Vegans beware!");
}