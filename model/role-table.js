const { Sequelize, DataTypes } = require('sequelize');


// include database configuration file 
const sequelize = require('../db-config/database');


//create models
const Role = sequelize.define('Role', {
    name: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    }
}, {
    freezeTableName: true //customize table name 
});


// verify if model was sucessfully created 
console.log(Role === sequelize.models.Role);


//create table from model
Role.sync()
    .then(() => {
        console.log("Role model was synchronized successfully.");
    })



module.exports = Role;