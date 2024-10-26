const router = require("express").Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const companyRouter = require("./companyRouter");
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/company", companyRouter);

module.exports = router;
