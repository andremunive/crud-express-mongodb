// Requerimos el módulo express y se lo atribuimos a una constante
const express = require('express');
// Requerimos el módulo de mongoose y se lo asignamos a una constante
const mongoose = require('mongoose');
// Requerimos el módulo de dotenv y si método config()
require('dotenv').config();
//Importamos el enrutador para tener acceso a todas las rutas definidas en el archivo de user.js
const userRoutes = require('./routes/user')

//Ejecutamos express, lo cuál retornará el objeto de la aplicación
const app = express();

//Puerto en el que estará escuchando nuestro servidor
//process.env.PORT le indica a nuestro servidor que si
//nuestra app está desplegada en un servicio en la nube
//utilice el puerto que este servicio le provee.
const PORT = process.env.PORT || 9000;

/**
 * middleware
 */
app.use(express.json())
app.use('/api',userRoutes);

/**
 * Conección a la base de datos
 */
// Utilizamos el método .connect de mongoose el cuál recibirá como
// parámetro la llave de conexión establecida como variable de entorno
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

//Con este método le indicamos a nuestro servidor que escuche
//en un puerto especifico e imprimimos un mensaje por consola
//si la conexión al puerto fue exitosa
app.listen(PORT, ()=> console.log('Servidor escuchando en el puerto ',PORT));
