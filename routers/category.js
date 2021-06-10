const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', (req, res) => {
   res.send('HomePage');
});

router.get('/category', (req, res) => {
   // console.log(db.query("SELECT * FROM category"));

   db.query("SELECT * FROM category").then(([rows, fields]) => {
         res.send(rows);
      })
      .catch(err => {
         console.log(err);
      });

})

module.exports = router;