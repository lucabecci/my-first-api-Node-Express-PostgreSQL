const { Router } = require('express');
const router = Router();
//import controllers for routes
const { getUsers, createUser, getUserByID, deleteUser, updateUser } = require('../controllers/index.controllers')
//traer todos los usuarios
router.get('/users', getUsers);
//crear usuario
router.post('/users', createUser);
//buscar un usuario segun su id
router.get('/users/:id', getUserByID);
//eliminar usuario
router.delete('/users/:id', deleteUser);
//editando usuario
router.put('/users/:id', updateUser);

module.exports = router;