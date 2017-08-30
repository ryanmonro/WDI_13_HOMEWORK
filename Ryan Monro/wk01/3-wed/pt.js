var trainLines = [
  {name: "Alamein", stops: ["Flinders St", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]},
  {name: "Glen Waverley", stops: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]},
  {name: "Sandringham", stops: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]},
  {name: "Frankston", stops: ["Richmond", "South Yarra", "Hawksburn", "Toorak", "Armadale", "Malvern"]}
];

var findLineWithStop = function (stopName){
  var foundLine;
  trainLines.forEach(function(line){
    if (line.stops.indexOf(stopName) > -1) {
      foundLine = line;
      return;
    }
  });
  return foundLine;
};

var origin;
var destination;
var richmond = "Richmond";
var originLine;
var destinationLine;
var journey = [];


// prompt for origin station until valid station entered, find its line
while (!originLine){
  origin = prompt("What is the origin of your journey?");
  originLine = findLineWithStop(origin);  
}

// prompt for destination until valid station entered, find its line
while (!destinationLine){
  destination = prompt("What is your destination?");
  destinationLine = findLineWithStop(destination);
}

// make sure we don't change lines if we don't need to
if (destination === richmond) {
  destinationLine = originLine;
}
if (origin === richmond) {
  originLine = destinationLine;
}

// if origin and destination are on the same line
if (originLine === destinationLine) {
  // make copy of line
  var line = originLine.stops.slice();
  // if line in wrong order, reverse it
  if (line.indexOf(origin) > line.indexOf(destination)) {
    line.reverse();
  }
  // copy required stops for journey to journey array
  journey = line.slice(line.indexOf(origin), line.indexOf(destination) + 1);
} else {
  // make copies of origin and desination lines
  var originLineCopy = originLine.stops.slice();
  var destinationLineCopy = destinationLine.stops.slice();
  // put origin line in correct order
  if (originLineCopy.indexOf(origin) > originLineCopy.indexOf(richmond)){
    originLineCopy.reverse();
  }
  // add origin line stops up to and including Richmond to journey array
  journey = originLineCopy.slice(originLineCopy.indexOf(origin),
    originLineCopy.indexOf(richmond) + 1);
  // add line change message to journey array's Richmond 
  journey[journey.length - 1] += "(change to " + destinationLine.name + " line)";
  // put destination line in correct order
  if (destinationLineCopy.indexOf(richmond) > destinationLineCopy.indexOf(destination)){
    destinationLineCopy.reverse();
  }
  // add destination line stops to journey array
  journey = journey.concat(destinationLineCopy.slice(destinationLineCopy.indexOf(richmond) + 1, destinationLineCopy.indexOf(destination) + 1));
}

console.log("origin:", origin);
console.log("destination:", destination);
console.log("\n");
console.log(journey.join(" -----> "));
console.log("\n");
console.log(journey.length - 1 + " stops total");

// todo: 
// change at South Yarra instead of Richmond - change at any station that the origin and destination lines have in common?
