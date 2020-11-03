const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require("./models/User");
const Inventory = require("./models/Inventory");
// Matches with "/api/books"
router.route("/")
  //.get(userController.findById)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id/update")
  .get(userController.findById)
  .put(userController.update)
  //.delete(userController.remove);

module.exports = router;