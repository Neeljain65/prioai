const { json } = require("express");
const { pool } = require("../config/database");

const getinterviews = async (req, res) => {
  const query = `SELECT i.*
FROM Interview i
JOIN Company c ON i.company_id = c.company_id
JOIN User u ON c.owner = u.user_id
WHERE u.email = ? AND u.role = 'Owner';
`;
  const users = await pool.query(query,[req.body.email]);
  res.status(200).json({
    success: true,
    data: users,
  });
};


const bcrypt = require('bcrypt');
// Import the User model

// Signup function




module.exports = {
  
  getinterviews
  
 
};
