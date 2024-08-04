const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital_triage', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port:'3000',
});

module.exports = sequelize;
