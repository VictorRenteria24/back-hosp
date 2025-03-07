const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.mysql://root:QEisbHUGFlkPcgUAAZiAuYHTWaiIIbWK@mysql.railway.internal:3306/railway, {
  dialect: 'mysql',
});

module.exports = sequelize;