const router = require("express").Router()

// Service router
const serviceRouter = require("./services")

router.use("/", serviceRouter);

module.exports = router;
