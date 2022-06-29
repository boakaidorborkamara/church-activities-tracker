const { Sequelize } = require('sequelize');

// create db connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../tracker.db'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(() => {
        console.error('Unable to connect to the database:', error);
    });


module.exports = sequelize;