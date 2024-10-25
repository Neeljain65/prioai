const router = require("express").Router();


const companyController = require('../controllers/company.js');
router.get("/",companyController.getinterviews);


module.exports = router;
