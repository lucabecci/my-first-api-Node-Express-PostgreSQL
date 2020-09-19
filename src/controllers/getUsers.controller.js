const pool = require('../db/database');

const getUsersController = async(req, res) => {
    try {
     const response = await pool.query('SELECT * FROM users')
     res.status(200).json(response.rows);
    } 
    catch {
     res.status(500).json({msg: 'Not Found Your Search'})
    }
 };


module.exports = getUsersController;