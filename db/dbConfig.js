const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Your DB username
    password: 'Deepak@123', // Your DB password
    database: 'task_manager'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

module.exports = db;