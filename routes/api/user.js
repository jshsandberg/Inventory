//resource:https://www.geeksforgeeks.org/nodejs-authentication-using-passportjs-and-passport-local-mongoose/
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport")

// Matches with "/api/users"
router.route("/signup")
  //.get(userController.findById)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:username")
  .get(userController.find)
  .put(userController.update)
  //.delete(userController.remove);

// router.post('/signin', passport.authenticate("local"), (req,res)=> {
//   res.json(req.user)
// }); 

router.post('/signin', passport.authenticate("local"), (req,res)=> {
  console.log("it works")
  res.json(req.user)
}); 



module.exports = router;