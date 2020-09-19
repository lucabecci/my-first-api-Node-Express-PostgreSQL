const pool = require('../db/database');

const updateUserController = async(req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const queryUpdate = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';

    const response = await pool.query(queryUpdate, [name, email, id]);
    console.log(response);
    res.send('USER UPDATE')
}

module.exports = updateUserController;