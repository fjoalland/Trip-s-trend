var API = require('qpx-express');
 
var apiKey = 'AIzaSyCE5d9lPe8uL99DDI71RIdHD8B5W7BDMd4';
var qpx = new API(apiKey);
 
var body ={
  "request": {
    "slice": [
      {
        "origin": "NYC",
        "destination": "LGA",
        "date": "2017-03-03"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 20,
    "refundable": false
  }
}
;
 
qpx.getInfo(body, function(error, data){
    console.log('Heyy!', data);
});