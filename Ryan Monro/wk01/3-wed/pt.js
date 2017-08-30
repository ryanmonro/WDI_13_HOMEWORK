var trainLines = [
  {name: "Alamein", stops: ["Flinders St", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]},
  {name: "Glen Waverley", stops: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]},
  {name: "Sandringham", stops: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]}
];

var findLineWithStop = function (stopName){
  var foundLine;
  trainLines.forEach(function(line){
    if (line.stops.indexOf(stopName) > -1) {
      foundLine = line.stops;
      return;
    }
  });
  return foundLine;
};

var origin = "Flinders St";
var destination = "Prahran";
var originLine;
var desinationLine;
var journey = [];


// prompt for origin station until valid station entered, find its line
while (!originLine){
  origin = prompt("What is the origin of your journey?");
  originLine = findLineWithStop(origin);  
}

// prompt for destination until valid station entered, find its line
while (!destinationLine){
  destination = prompt("What is your destination?");
  var destinationLine = findLineWithStop(destination);
}

// if origin and destination are on the same line
if (originLine === destinationLine) {
  // make copy of line
  var line = originLine.slice();
  // if line in wrong order, reverse it
  if (line.indexOf(origin) > line.indexOf(destination)) {
    line.reverse();
  }
  // copy required stops for journey to journey array
  journey = line.slice(line.indexOf(origin), line.indexOf(destination) + 1);
} else {
  // make copies of origin and desination lines
  var originLineCopy = originLine.slice();
  var destinationLineCopy = destinationLine.slice();
  // put origin line in correct order
  if (originLineCopy.indexOf(origin) > originLineCopy.indexOf("Richmond")){
    originLineCopy.reverse();
  }
  // add origin line stops up to Richmond to journey array
  journey = originLineCopy.slice(originLineCopy.indexOf(origin),
    originLineCopy.indexOf("Richmond"));
  // put destination line in correct order
  if (destinationLineCopy.indexOf("Richmond") > destinationLineCopy.indexOf(destination)){
    destinationLine.reverse();
  }
  // add destination line stops to journey array
  journey = journey.concat(destinationLineCopy.slice(destinationLineCopy.indexOf("Richmond"), destinationLineCopy.indexOf(destination) + 1));
}

console.log("origin:", origin);
console.log("destination:", destination);
console.log(journey.join(" -----> "));
console.log(journey.length - 1 + " stops total");
