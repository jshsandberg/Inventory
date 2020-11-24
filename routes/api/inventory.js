const router = require("express").Router();
const inventController = require("../../controllers/inventoryController");
const userController = require("../../controllers/userController");
// const User = require("../../models/User");
// const Inventory = require("../../models/Inventory");
// Matches with "/api/books"
router.route("/")
  // .get(inventController.findAll)
   .post(inventController.create);

router
  .route("/:id")
  .get(inventController.findById)

router
  .route("/user/:id")
  .get(userController.findById)

// Matches with "/api/inventory/:id" and puts inventory in
router
  .route("/update/:id")
  .get(inventController.findById)
  .put(inventController.update);

//matches with /api/inventory/:id and remove an item
router
  .route("/remove/:id")
  .get(inventController.findById)
  .delete(inventController.remove);

router
  .route("/delete/:id")
  .delete(inventController.remove)

module.exports = router;