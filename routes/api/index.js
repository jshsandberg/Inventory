const router = require("express").Router();
const userRoute = require("./user");
const htmlRoute=require("./html-routes");

// User routes
router.use("/", userRoute);

module.exports = router;
