const express = require('express');
// Pasamos a importar el modelo de usuarios
const userSchema = require('../models/userModels');

// Hacemos uso del constructor de express llamado Router
// para la creación de un enrutador
const router = express.Router();

/**
 * Create User
 */
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Get all users
 */
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Get a user
 */
router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Update a user
 */
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
        .updateOne({_id: id}, {$set: {name, age, email}})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Delete a user
 */
router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .remove({_id: id})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});



module.exports = router;