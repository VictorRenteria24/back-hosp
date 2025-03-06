const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => console.log('Conexión establecida correctamente.'))
  .catch(err => console.error('Error al conectar:', err));