const mysql = require('mysql2');

const pool = mysql.createPool({
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    database: process.env.DBNAME
});

module.exports = pool.promise();
