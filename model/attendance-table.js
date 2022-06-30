const { Sequelize, DataTypes } = require('sequelize');


// include database configuration file 
const sequelize = require('../db-config/database');


//create models
const Attendance = sequelize.define('Attendance', {
    date: {
        type: DataTypes.STRING,
        allownull: false
    },
    first_time_to_attend: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {
    freezeTableName: true //customize table name 
});


// verify if model was sucessfully created 
console.log(Attendance === sequelize.models.Attendance);


//create table from model
Attendance.sync()
    .then(() => {
        console.log("Attendance model was synchronized successfully.");
    })



module.exports = Attendance;