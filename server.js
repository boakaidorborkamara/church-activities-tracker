const express = require('express');

// database connection file 
const db_connection = require('./db-config/database');

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Server is listening ${port}`)
})