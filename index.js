const express = require('express');
const app = express();
const db = require('./app.js');
const port = process.env.port || 3000;




app.listen(port, () => {
   console.log(`Server started on port ${port}`)
});