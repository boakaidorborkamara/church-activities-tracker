const { Sequelize, DataTypes } = require('sequelize');


// include external modles 
const Church = require('./church-table');


// include database configuration file 
const sequelize = require('../db-config/database');
const { use } = require('express/lib/application');
const User = require('./user-table');


//create models
const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allownull: false,
    }
}, {
    freezeTableName: true //customize table name 
});


//create relationship or foreign keys
Church.hasMany(Event, {
    foreignKey: 'ChurchId'
});
Event.belongsTo(Church);


// verify if model was sucessfully created 
console.log(Event === sequelize.models.Event);


//create table from model
Event.sync()
    .then(() => {
        console.log("Event model was synchronized successfully.");
    })



module.exports = Event;