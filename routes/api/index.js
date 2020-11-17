const router = require("express").Router();
const userRoute = require("./user");
const inventRoute = require("./inventory");

// User routes
router.use("/user", userRoute);
router.use("/inventory", inventRoute);

module.exports = router;
