const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

require('dotenv').config();

const sequelize = require('./config/database');
const User = require('./models/User');

app.use('/api/peticiones', require('./routes/peticion'));
app.use('/api/insumos', require('./routes/insumo'));

app.use(express.json()); // Para parsear cuerpos JSON
app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

sequelize.sync({ force: true }).then(() => {
  console.log('Base de datos sincronizada');
});
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});