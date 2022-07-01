const { Sequelize, DataTypes } = require('sequelize');

// include external models 
const Church = require('./church-table');
const Role = require('./role-table');


// include database configuration file 
const sequelize = require('../db-config/database');



//create model
const User = sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allownull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allownull: true
    },
    phone_number: {
        type: DataTypes.STRING,
        allownull: true
    },
    whatsapp_number: {
        type: DataTypes.STRING,
        allownull: true
    },
    gender: {
        type: DataTypes.STRING,
        allownull: false
    },
    address: {
        type: DataTypes.STRING,
        allownull: false
    },
    address: {
        type: DataTypes.STRING,
        allownull: false
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {
    freezeTableName: true //customize table name
});


//define association/foreign key
Church.hasMany(User, {
    foreignKey: 'ChurchId'
});
User.belongsTo(Church);

//relationship between role and user
Role.hasMany(User, {
    foreignKey: 'RoleId'
});
User.belongsTo(Role);


// verify if the model was created 
console.log(User === sequelize.models.User);



//create table from models
User.sync({ force: true })
    .then(() => {
        console.log("User model was synchronized successfully.");
    })
    .catch((error) => {
        console.log(error);
    });



module.exports = User;