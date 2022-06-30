const { Sequelize, DataTypes } = require('sequelize');



//include database configuration
const sequelize = require('../db-config/database');



// create model
const Church = sequelize.define('Church', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true //customize model name
});


// verify if the model was created 
console.log(Church === sequelize.models.Church);



// create table from model 
Church.sync()
    .then(() => {
        console.log("Church model was synchronized successfully.");
    })





module.exports = Church;