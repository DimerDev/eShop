   const mysql = require('mysql2');

   const db = mysql.createPool({

      host: '10.10.7.27',
      user: 'dev',
      password: 'Vseputem!1985',
      database: 'eShop',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
   }).promise();

   db.execute("SELECT * FROM category")
      .then(result => {
         console.log(result[1][2].name);
      })
      .catch(err => {
         console.log(err);
      });

   module.exports.db = db;