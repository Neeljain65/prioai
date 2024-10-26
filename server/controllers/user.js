const { json } = require("express");
const { pool } = require("../config/database");

const getUsers = async (req, res) => {
  const query = `SELECT * FROM user`;
  const users = await pool.query(query);
  res.status(200).json({
    success: true,
    data: users,
  });
};

const getinterviews = async (req, res) => {
  const query = `SELECT i.interview_id, i.interview_date, i.interview_details, 
       c.company_id, c.company_name, c.job_position
FROM Interview i
JOIN Company c ON i.company_id = c.company_id
JOIN User_Company uc ON uc.company_id = c.company_id
WHERE uc.user_id = ?; 
`;
  const interviews = await pool.query(query,[req.params.id]);
  res.status(200).json({
    success: true,
    data: interviews,
  });
}

const bcrypt = require('bcrypt');
// Import the User model

// Signup function




module.exports = {
  getUsers,
  getinterviews
  
 
};
