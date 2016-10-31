"use strict";

var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

var QUERY_CREATE_TABLE = "CREATE TABLE IF NOT EXISTS `names` (`id` int(10) unsigned NOT NULL auto_increment, `name` varchar(50) NOT NULL default '0', PRIMARY KEY  (`id`))";

var SELECT_FROM = `SELECT * from names`;

connection.connect();

connection.query(QUERY_CREATE_TABLE, function(err, result) {
    if (!err)
        console.log('The solution is: ', result);
    else
        console.log('Error while performing Query.', err);
});

connection.query(SELECT_FROM, function(err, rows) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});

connection.end();