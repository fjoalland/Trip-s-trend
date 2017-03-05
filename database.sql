CREATE TABLE IF NOT EXISTS trips  (
    id serial primary key,
	idTrips varchar(255) NOT NULL,
	origin varchar(255) NOT NULL,
	destination varchar(255) NOT NULL,
	duration INT NOT NULL,
	date DATE NOT NULL ,
	saleTotal REEL NOT NULL
);