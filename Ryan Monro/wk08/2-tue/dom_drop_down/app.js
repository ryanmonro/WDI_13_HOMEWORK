var $cityTypeSelect = $('#city-type');

var cities = [
  {name: "Austin", classname: "austin"},
  {name: "Sydney", classname: "sydney"},
  {name: "Los Angeles", classname: "la"},
  {name: "San Francisco", classname: "sf"},
  {name: "New York", classname: "nyc"}
];

cities.forEach(function(city){
  $cityTypeSelect.append("<option value=\"" + city.classname + "\">" + city.name + "</option>");  
});

$cityTypeSelect.on('change', function(event){
  var newClass = event.target.value;
  $('body').removeClass();
  $('body').addClass(newClass);
});