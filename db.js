var mysql = require('mysql');

var db_config = {
	host: "127.0.0.1",
	user: "fa17g07",
	password: "csc648fa17g07",
	database: 'fa17g07',
	connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
	multipleStatements : true   
};

var pool = mysql.createPool(db_config);

module.exports = pool;
