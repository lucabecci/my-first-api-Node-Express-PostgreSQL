const createUserController = require('./createUser.controller');
const deleteUserController = require('./deleteUser.controller');
const getUserByIDController = require('./getUserByID.controller');
const getUsersController = require('./getUsers.controller');
const updateUserController = require('./updateUser.controller');

//respondiendo usuarios
const getUsers = getUsersController
//creando usuario
const createUser = createUserController;
//buscando un usuario por ID
const getUserByID = getUserByIDController;
//eliminando usuario por id
const deleteUser = deleteUserController;
//editando usuario
const updateUser = updateUserController;


module.exports = {
    getUsers,
    createUser,
    getUserByID,
    deleteUser,
    updateUser
}