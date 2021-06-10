const express = require('express');
const router = express.Router();
const db = require('../app.js');

router.get('/', (req, res) => {
   res.send('HomePage');
});

router.get('/category', (req, res) => {
   console.log(db.query("SELECT * FROM category"));
   res.send(db.query("SELECT * FROM category"))

})

module.exports = router;