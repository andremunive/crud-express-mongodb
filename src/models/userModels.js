const mongoose = require('mongoose');


// En mongoose, los modelos suelen llamarse schemas, por ende
// guardaremos el modelo de nuestros usarios en la siguiente constante
// y haremos uso del método .Schema() de mongoose que se encarga de 
// crear un nuevo modelo.
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

//Exportamos el modelo del usuario con mongoose.model que recibirá como
// parámetro el nombre como lo vas a usar, y lo que vas a exportar
module.exports = mongoose.model('User', userSchema);