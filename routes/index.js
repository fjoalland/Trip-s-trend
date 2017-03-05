var express = require('express');
var router = express.Router();
var API = require('qpx-express');
var TripDao = require(__dirname + '/../dal/tripDao');
var tripDao = new TripDao();
/* GET home page. */
router.get('/', function(req, res, next) {

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
		console.log(data.trips.tripOption[0]);

		res.writeHead(200, {"Content-Type": "application/json"});

		var json = JSON.stringify({ 
			response: data.trips.tripOption
		});

        tripDao.createTrip(data.trips.tripOption[0], date, function(err, result){
		 	console.log(result);
		});

		res.end(json);

	});


});

module.exports = router;
