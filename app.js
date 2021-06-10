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

module.exports.query = (str) => {
   db.execute(str)
      .then(result => {
         return result[0].map(item => {
            JSON.stringify(item)
         })
      })
      .catch(err => {
         console.log(err);
      });
}