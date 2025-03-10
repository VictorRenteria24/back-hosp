require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.railway, // Nombre de la BD
  process.env.root,     // Usuario
  process.env.QEisbHUGFlkPcgUAAZiAuYHTWaiIIbWK, // Contraseña
  {
    host: process.env.mysql.railway.internal, // Host de Railway
    dialect: 'mysql',
    port: process.env.MYSQL_PORT || 3306,
    logging: false
  }
);

module.exports = sequelize;
