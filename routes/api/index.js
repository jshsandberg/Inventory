const router = require("express").Router();
const userRoute = require("../../models/User");
//const inventRoute = require("./inventory");

// User routes
router.use("/signin", userRoute);

module.exports = router;
