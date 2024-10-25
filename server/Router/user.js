const router = require("express").Router();
const { get } = require("mongoose");
const { getUsers } = require("../controllers/user.js");

const userController = require('../controllers/user.js');
router.get("/", getUsers);
router.get("/:id", userController.getinterviews);

module.exports = router;
