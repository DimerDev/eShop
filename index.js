const express = require('express');
const app = express();
const db = require('./db.js');
const port = process.env.port || 3030;
const router = require('./routers/category.js')

app.use(express.json());
app.use('/', router);
app.use('/category', router);


app.listen(port, () => {
   console.log(`Server started on port ${port}`)
});