const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital', 'victor24', 'Merlin24$', {
  host: 'localhost',
  dialect: 'mysql',  // Especificamos que usamos MySQL
  port: 3306,       // Puerto por defecto de MySQL en XAMPP
});

module.exports = sequelize;

