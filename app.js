var express = require('express');
//var router = express.Router();
var API = require('qpx-express');
var TripDao = require(__dirname + '/dal/tripDao');
var tripDao = new TripDao();
var app = express();


//router.get('/', function(req, res, next) {
 setInterval(function () { 	
	console.log("Add data trip");
	var apiKey = 'AIzaSyCE5d9lPe8uL99DDI71RIdHD8B5W7BDMd4';
	var qpx = new API(apiKey);
	var date = "2017-04-27";
	
	var body ={
	  "request": {
	    "slice": [
	      {
	        "origin": "CDG",
	        "destination": "ICN",
	        "date": date
	      }
	    ],
	    "passengers": {
	      "adultCount": 1,
	      "infantInLapCount": 0,
	      "infantInSeatCount": 0,
	      "childCount": 0,
	      "seniorCount": 0
	    },
	    "solutions": 30,
	    "refundable": false
	  }
	}
	;


	 
	qpx.getInfo(body, function(error, data){

		console.log("Json flight ticket.");
		
		for(var i= 0; i < data.trips.tripOption.length; i++)
		{
			console.log(data.trips.tripOption[i]);
			tripDao.createTrip(data.trips.tripOption[i], date, function(err, result){
				console.log(result);
			});
		}
		
		//var json = JSON.stringify({ 
		//	response: data.trips.tripOption
		//});
		
		//res.writeHead(200, {"Content-Type": "application/json"});
		//res.end(json);

	});
	
setTimeout}, 10000); 

//});
module.exports = app;

