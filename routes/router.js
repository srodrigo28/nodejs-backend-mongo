const router = require("express").Router()

// Service router
const serviceRouter = require("./services")
router.use("/", serviceRouter);

// Service User
const userRouter = require("./users")
router.use("/", userRouter);

module.exports = router;
