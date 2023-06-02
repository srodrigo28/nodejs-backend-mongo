const router = require("express").Router()

// Service router
const serviceRouter = require("./services")
router.use("/", serviceRouter);

// User router
const userRouter = require("./users")
router.use("/", userRouter);

// Contas router
// const contaRouter = require("./contas")
// router.use("/", contaRouter);

module.exports = router;
