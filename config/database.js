function Database(){
	this.databaseType = 'postgres';
	this.user = 'rfwlcjzp';
	this.password = 'p5a1liJ1-BoV6tYwdkXSEmvEQNCgBfJk';
	this.hostname = 'horton.elephantsql.com';
	this.port = '5432';
	this.databaseName = 'rfwlcjzp';
	this.currentSchema = 'flight';
	this.getConnectionString = function(){
		var connectionString = "";
		connectionString = connectionString.concat(
			this.databaseType, '://',
			this.user, ':',
			this.password, '@',
			this.hostname, ':',
			this.port, '/',
			this.databaseName, '?currentSchema=',
			this.currentSchema
		);
		return connectionString;
	}
}

module.exports = Database;