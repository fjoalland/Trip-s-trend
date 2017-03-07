// Absolute path
var path = require('path');
var appDir = path.dirname(require.main.filename);

// Modules
var pg = require('pg');
var bcrypt = require('bcryptjs');
var Database = require(__dirname + '/../config/database');
var Photo = require('./models/trip');


QUERY_INSERT_NEW_TRIP = 'INSERT INTO trip(idtrip, origin, destination, duration, date, saletotal) VALUES($1, $2, $3, $4, $5, $6)';



module.exports = function tripDao(){

    db = new Database();
    var connString = db.getConnectionString();

	this.createTrip = function(newTrip, date, callback) {
        
        var client = new pg.Client(connString); 
        client.connect();
        var saletotal = newTrip.saleTotal.split("EUR");
        console.log(saletotal);
        console.log(saletotal[1]);

        data = [
                newTrip.id,
                "CDG",
                "ICN",
                newTrip.slice[0].duration,
                date,
                saletotal[1]];

        client.query(QUERY_INSERT_NEW_TRIP, data, function (err, result) {
            if(err){
                client.end();
                console.log(err);
                callback(err, true);
            }

            callback(null, newTrip.id);
            client.end();
        });
    };
}
