
const bcrypt = require("bcrypt");
const { pool } = require("../config/database");



const login = async (req, res, next) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM user WHERE email = '${email}'`;
  const user = await pool.query(query);
  if (user.length == 0) {
    res.status(400).json({
      success: false,
      message: "User not found",
    });
  } else {
        res.status(200).json({
          success: true,
          message: "User found",
          data: user[0],
        });
        } 
        
    }
  
  




module.exports = {
  
  
  login,
};
