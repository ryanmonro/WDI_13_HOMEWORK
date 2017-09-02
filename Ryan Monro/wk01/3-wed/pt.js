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
  // return array slice including origin and destination
  return lineCopy.slice(lineCopy.indexOf(origin), lineCopy.indexOf(destination) + 1);
}

// find earliest station to change lines at
var findEarliestChange = function(journey){
  // iterate through stops on journey, find first stop that occurs again
  // later in the journey
  for (var changeFrom = 0; changeFrom < journey.length; changeFrom++){
    // look at all subsequent stops, compare to current stop
    for (var changeTo = changeFrom + 1; changeTo < journey.length; changeTo++){
      if (journey[changeFrom] === journey[changeTo]){
        // we now have the index of the stop where the line change should occur
        // remove all stops _between_ changeTo and changeFrom
        var stopsToRemove = changeTo - changeFrom;
        // only remove stops _between_ change stations
        journey.splice(changeFrom + 1, stopsToRemove - 1);
        return journey;
      }
    }
  }
};

// return journey as string
var journeyAsString = function(journey, destinationLineName){
  var journeyString = ""; 
  journey.forEach(function(stopName, index){
    // add each stop name to the string
    journeyString += stopName;
    // if the next stop name is the same stop, indicate a line change
    if (stopName === journey[index + 1]) {
      journeyString += "\nChange to " + destinationLineName + " line\n";
    }
    // otherwise add the arrow between stops
    else if (index < journey.length - 1) {
      journeyString += " -----> ";
    }
  });
  return journeyString;
};

//
// Main program begins here
//

var origin;
var destination;
var richmond = "Richmond";
var originLine;
var destinationLine;
var changeLines = false;

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
  // get stops between origin and line change
  var originStops = getStopsBetween(origin, richmond, originLine);
  // get stops between line change and destination
  var destinationStops = getStopsBetween(richmond, destination, destinationLine);
  // concat arrays together, we now have one array of stops
  journey = originStops.concat(destinationStops);
  // change at an earlier stop than Richmond if possible)
  // findEarliestChange(journey);
  changeLines = true;
}

// Display journey to console
console.log("origin: " + origin + " (" + originLine.name + " line)");
console.log("destination: " + destination + " (" + destinationLine.name + " line)");
console.log("\n");
console.log(journeyAsString(journey, destinationLine.name));
console.log("\n");
var journeyLength = journey.length - 1;
// account for incorrect journey length if there's a line change
if (changeLines){
  journeyLength--;
}
console.log(journeyLength + " stops total");
