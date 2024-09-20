require('dotenv').config();
const express = require('express');
const emailRoutes = require('./routes/emailRoutes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/emailService', emailRoutes); // Prefijo para las rutas de la API

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: ${PORT}`);
});