var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au&units=metric&APPID=f7021c28bb4b65e4298e175e3d7c3efc', function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    temperature = JSON.parse(body).main.temp;
    console.log(temperature + "°C");    
  }
});