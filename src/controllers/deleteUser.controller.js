const pool = require('../db/database');

const deleteUserController = async(req, res) =>{
    const id = req.params.id;
    const queryDelete = 'DELETE FROM users WHERE id = $1';

    const response = await pool.query(queryDelete, [id])
    console.log(response)
    res.json(`User ${id} Deleted Successfully`)
}

module.exports = deleteUserController;