const router = require("express").Router();
const inventController = require("../../controllers/inventoryController");
const User = require("./models/User");
const Inventory = require("./models/Inventory");
// Matches with "/api/books"
// router.route("/")
//   .get(inventController.findAll)
//   .post(inventController.create);

// Matches with "/api/inventory/:id" and puts inventory in
router
  .route("/:id/update")
  .get(inventController.findById)
  .put(inventController.update);

//matches with /api/inventory/:id and remove an item
router
  .route("/:id/remove")
  .get(inventController.findById)
  .delete(inventController.remove);

module.exports = router;