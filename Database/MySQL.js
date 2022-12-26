const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected...");
    }
});

module.exports = conn;



/*----query----*/

conn.query(``, (err, result) => {
    if (!err) {
        res.status(200).send("Data inserted...");
    }
});