const router = require("express").Router();


const companyController = require('../controllers/company.js');
router.post("/",companyController.getinterviews);


module.exports = router;
