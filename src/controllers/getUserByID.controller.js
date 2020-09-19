const pool = require('../db/database');

getUserByIDController = async(req, res) => {
    try{
        const id = req.params.id;
        const querySearch = 'SELECT * FROM users WHERE id = $1';
        const response = await pool.query(querySearch, [id]);
        //comprobando que el dato exista 
        if(response.rows.length < 1){
            res.status(200).json({
                message: 'User Not Found'
            })
        }else{
            res.status(200).json(response.rows);
        }
    }
    catch{
        res.status(500).json({
            message: 'ERROR!!!! Internal Error. Try Later'
        })
    }
}

module.exports = getUserByIDController;