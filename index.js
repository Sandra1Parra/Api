const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./src/routes/user");
 const uri = 'mongodb+srv://julian:GVSkAs77Q5twlcKW@fashion.ce8hwuo.mongodb.net/';
 const app = express();
const port = process.env.PORT || 9000;
 // Middleware
app.use(express.json());
app.use('/api', userRoutes);
 // Ruta de prueba
app.get('/', (req, res) => {
  res.send('Prueba 1: Respuesta del servidor');
});
 // Conexión a la base de datos
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });