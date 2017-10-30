var fs = require('fs');
var http = require('http');

var app = function(request, response){
  var buffer = fs.readFile('postcodes.csv', 'utf-8', function(err, data){
    var csvRows = data.split('\r\n');
    var output = {};
    output.postcodes = [];
    // loop through csv rows
    for (var r = 1; r < csvRows.length - 1; r++){
      var row = csvRows[r];
      // remove quotes from row
      row = row.replace(/\"/g, '');
      var cells = row.split(',');
      // add row as object to output array
      output.postcodes.push({
        postcode: cells[0],
        suburb: cells[1],
        state: cells[2],
        dc: cells[3],
        type: cells[4].trim(),
        lat: cells[5],
        lon: cells[6]}
      );
    }
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(output));
    response.end();
  });
}
var server = http.createServer(app);
server.listen(8888);
