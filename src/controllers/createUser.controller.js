const pool = require('../db/database');

const createUserController = async (req, res) => {
    try {
      const { name, email } = req.body;
      const queryValue = "INSERT INTO users (name, email) VALUES ($1, $2)";
      const response = await pool.query(queryValue, [name, email]);
      console.log(response);
      res.json({
        message: "User Added Successfuly",
        body: {
          user: { name, email },
        },
      })
    } catch {
      res.json({ msg: "OH, Has Ocurred A Problem. Try Later Please." });
    }
  };
  
module.exports = createUserController;