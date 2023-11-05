const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelizeConnection');

const Vehicle = sequelize.define('vehicle', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    locadora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    motor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    portas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cambio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ar_condicionado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = Vehicle;