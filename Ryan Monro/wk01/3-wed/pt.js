var trainLines = [
  {name: "Alamein", stops: ["Flinders St", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]},
  {name: "Glen Waverley", stops: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]},
  {name: "Sandringham", stops: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]},
  {name: "Frankston", stops: ["Richmond", "South Yarra", "Hawksburn", "Toorak", "Armadale", "Malvern"]}
];

// return train line object containing specified stop name
// returns undefined if stop name not found
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

// returns array of stops between origin and destination inclusive
var getStopsBetween = function(origin, destination, line){
  // make copy of line
  var lineCopy = line.stops.slice();
  // if line in wrong order, reverse it
  if (lineCopy.indexOf(origin) > lineCopy.indexOf(destination)) {
    lineCopy.reverse();
  }
  // return slice including origin and destination
  return lineCopy.slice(lineCopy.indexOf(origin), lineCopy.indexOf(destination) + 1);
}

// find earliest station to change lines at
var findEarliestChange = function(originStops, destinationStops, destinationLineName){
  // iterate through stops on origin line, find first stop that is also
  // in the destination line: that's where we change train lines
  var changeAt;
  for (var stop = 0; stop < originStops.length; stop++){
    if (destinationStops.indexOf(originStops[stop]) > -1) {
      changeAt = originStops[stop];
      break;
    }
  };
  var journey = originStops.slice(0, stop + 1);
  // add line change message to journey array's final entry
  journey[journey.length - 1] += "\nChange to " + destinationLineName + " line\n" + changeAt;
  var stopsAfterChange = destinationStops.slice(destinationStops.indexOf(changeAt) + 1);
  return journey.concat(stopsAfterChange);
};

var origin;
var destination;
var richmond = "Richmond";
var originLine;
var destinationLine;

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

var journey = [];
// if origin and destination are on the same line
if (originLine === destinationLine) {
  // copy stops between origin and destination to journey array
  journey = getStopsBetween(origin, destination, originLine);
} else {
  // copy stops from origin to line change to journey array
  var originStops = getStopsBetween(origin, richmond, originLine);
  // add destination line stops to journey array, omitting station where we changed
  var destinationStops = getStopsBetween(richmond, destination, destinationLine);
  // change at an earlier stop than Richmond if possible)
  // and concat arrays together, we now have one array of stops
  journey = findEarliestChange(originStops, destinationStops, destinationLine.name);
}

console.log("origin: " + origin + " (" + originLine.name + " line)");
console.log("destination: " + destination + " (" + destinationLine.name + " line)");
console.log("\n");
console.log(journey.join(" -----> "));
console.log("\n");
console.log(journey.length - 1 + " stops total");


