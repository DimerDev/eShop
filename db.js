require('dotenv').config()
const mysql = require('mysql2');

const db = mysql.createPool({

   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: 'eShop',
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
}).promise();


module.exports.db = db;

/*module.exports.query = (str) => {
   db.execute(str)
      .then(([rows, fields]) => {
         return rows;
      })
      .catch(err => {
         console.log(err);
      });
}*/
module.exports.query = (str) => {
   return db.execute(str)
}