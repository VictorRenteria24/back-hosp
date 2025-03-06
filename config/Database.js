const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital', 'victor24', 'Merlin24$', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;