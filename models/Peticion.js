const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Peticion = sequelize.define('Peticion', {
  servicio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'atendida', 'cancelada'),
    defaultValue: 'pendiente',
  },
  cantidad_surtida: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Peticion;