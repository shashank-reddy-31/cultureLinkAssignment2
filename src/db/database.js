const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
 if (err) {
 console.error(err.message);
 }
 console.log('Connected to the in-memory SQlite database.');
});

// Create a products
 db.serialize(() => {
 db.run(`CREATE TABLE products (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT NOT NULL,
 price REAL NOT NULL,
 quality TEXT NOT NULL )`);
});

module.exports = db;