const router = require("express").Router();
const userController = require("../../controllers/userController");
const auth = require("../../middleware/auth");

router.route("/register")
  .post(userController.register);

router.route("/login")
  .post(userController.login);

router.route("/delete")
  .delete(auth, userController.delete);

module.exports = router;