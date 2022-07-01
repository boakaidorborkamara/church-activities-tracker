const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');


const app = express();
const Port = process.env.port || 3000;


// use codes from database connection file 
const db_connection = require('./db-config/database');
//create tables
const church_tables = require('./model/church-table');
const user_table = require('./model/user-table');
const role_table = require('./model/role-table');
const event_table = require('./model/event-table');
const attendance_table = require('./model/attendance-table');


//ROUTES
const index_router = require('./routers/index_routers');
const church_routers = require('./routers/church_routers');



app.use(church_routers);
app.use(index_router);



app.listen(Port, () => {
    console.log(`Server is listening ${Port}`)
})