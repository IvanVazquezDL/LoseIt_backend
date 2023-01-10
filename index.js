const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//Crear el servidor de express
const app = express();

//Configurar cors
app.use(cors())

//Lectura y parseo del body
app.use(express.json());

//Base de Datos
dbConnection();

//Rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/weight', require('./routes/weight'));
app.use('/api/rooms', require('./routes/rooms'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})