const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');


const app = express();
const port = 3000;


// use codes from database connection file 
const db_connection = require('./db-config/database');
//create tables
const church_tables = require('./model/church-table');
const user_table = require('./model/user-table');
const role_table = require('./model/role-table');



app.listen(port, () => {
    console.log(`Server is listening ${port}`)
})