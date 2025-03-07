const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Insumo = sequelize.define('Insumo', {
  clave: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  existencia_total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  caducidad: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Insumo;