const { Sequelize, DataTypes } = require('sequelize');


// include database configuration file 
const sequelize = require('../db-config/database');


//create models
const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allownull: false,
    }
}, {
    freezeTableName: true //customize table name 
});


// verify if model was sucessfully created 
console.log(Event === sequelize.models.Event);


//create table from model
Event.sync()
    .then(() => {
        console.log("Event model was synchronized successfully.");
    })



module.exports = Event;