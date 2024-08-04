const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('./db');

const Patient = sequelize.define('Patient', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    severity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    queueTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'waiting'
    },
    createdAt:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
    }
});

Patient.sync()
    .then(() => console.log('Patients table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occurred', error));

module.exports = Patient;