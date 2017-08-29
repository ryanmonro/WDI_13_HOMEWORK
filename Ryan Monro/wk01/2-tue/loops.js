// Even/Odd Reporter
for (var count = 0; count <= 20; count++){
  if (count % 2 === 0) {
    console.log(count + " is even");
  } else {
    console.log(count + " is odd");
  }
}

// Multiplication Tables
for (var multiplier = 0; multiplier <= 10; multiplier++){
  console.log(multiplier + " * 9 = " + multiplier * 9);
}

// Top Choices
console.log("My Top TV Shows:");
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
for (var iteration = 0; iteration < myTopTVShows.length; iteration++){
  var suffix = "th";
  var index = iteration + 1;
  if (index === 1) {
    suffix = "st";
  } else if (index === 2){
    suffix = "nd";
  } else if (index === 3){
    suffix = "rd";
  }
  console.log("My " + index + suffix + " choice: " + myTopTVShows[index]);
}

// Pattern
// There are five rows
for (var row = 0; row < 5; row ++){
  // start with empty row
  var rowPattern = "";
  // add spaces at beginning, beginning with 0 for 0th row and increasing
  for (var spaceCount = 0; spaceCount < row; spaceCount++){
    rowPattern += " ";
  }
  // add a $ followed by a space beginning with 5 for row 0, decreasing 
  for (var count = 5; count > row; count--){
    rowPattern += "$ ";
  }
  // output row to console
  console.log(rowPattern);
}
