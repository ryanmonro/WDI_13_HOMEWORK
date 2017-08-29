// Even/Odd Reporter
console.log("Even/Odd Reporter");
for (var count = 0; count <= 20; count++){
  if (count % 2 === 0) {
    console.log(count + " is even");
  } else {
    console.log(count + " is odd");
  }
}

// Multiplication Tables
console.log("\nMultiplication");
for (var multiplier = 0; multiplier <= 10; multiplier++){
  console.log(multiplier + " * 9 = " + multiplier * 9);
}
// Bonus: nested loop for tables from 1 to 10
console.log("\nMultiplication Tables from 1 to 10:")
for (var secondNumber = 1; secondNumber <= 10; secondNumber++){
  for (var firstNumber = 1; firstNumber <= 10; firstNumber++){
    console.log(firstNumber + " * " + secondNumber + " = " + secondNumber * firstNumber);
  }
}

// Top Choices
console.log("\nMy Top TV Shows:");
var myTopTVShows = ["Better Call Saul", 
  "Rick and Morty", 
  "Twin Peaks", 
  "Game of Thrones",
  "IT Crowd",
  "Seinfeld",
  "Curb Your Enthusiasm",
  "Futurama", 
  "The Simpsons",
  "Breaking Bad"];
for (var index = 0; index < myTopTVShows.length; index++){
  var suffix = "th";
  var number = index + 1;
  // replace suffix if number is 1, 2 or 3
  if (number === 1) {
    suffix = "st";
  } else if (number === 2){
    suffix = "nd";
  } else if (number === 3){
    suffix = "rd";
  }
  console.log("My " + number + suffix + " choice: " + myTopTVShows[index]);
}

// The Money Tree!
console.log("\n💰The Money Tree💰");
// There are five rows
for (var row = 0; row < 5; row++){
  // start with an empty row
  var rowPattern = "";
  // add spaces to row, beginning with 4 for 0th row and decreasing
  for (var spaceCount = 4; spaceCount > row; spaceCount--){
    rowPattern += " ";
  }
  // add a $ followed by a space beginning with 1 for row 0, increasing by 2 per row 
  for (var count = 0; count <= row * 2; count++){
    rowPattern += "$";
  }
  // output row to console
  console.log(rowPattern);
}
