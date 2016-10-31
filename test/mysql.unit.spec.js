"use strict";

var mysql = require('mysql');

describe('mysql test', () => {
    var connection;

    before(() => {
        connection = mysql.createConnection({
            host     : process.env.MYSQL_HOST,
            user     : process.env.MYSQL_USER,
            password : process.env.MYSQL_PASSWORD,
            database : process.env.MYSQL_DATABASE
        });
    });

    it('test connection', (done) => {
        connection.connect(function(err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                throw new Error(err);
            }
            console.log('connected as id ' + connection.threadId);
            done();
        });
    });

    it('insert new item to mysql table', () => {

    });

    it('select all items', () => {

    });
});