const router = require("express").Router();
const userController = require("../../controllers/userController");
<<<<<<< HEAD
const auth = require("../../middleware/auth");

router.route("/register")
  .post(userController.register);

router.route("/login")
  .post(userController.login);
=======
const passport = require("passport");
const jwt = require("jsonwebtoken");
const db = require("../../models");
const expiresIn = 3600;

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

router
  .route("/:id")
  .get(userController.findById, () => console.log("I am here"))

router.post('/signin', passport.authenticate("local"), (req,res)=> {
  //console.log("it works");
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (expiresIn),
    data: req.user._id
  }, process.env.JWTSECRET || "");
  res.json({...req.user._doc, token})
  //console.log(res)
  // res.send(res.json())
}); 

router.post("/validate", ({body:{token}},res)=> {
  //console.log(token)
  const decoded = jwt.decode(token, process.env.JWTSECRET || "");
  //console.log(decoded);

  //checking to see if token expired
  if(+decoded.exp < (Date.now() / 1000)){
    //console.log("no good!")
    res.status(401).json({message: "Token expired, please log in again!"})
  }else{
    //gets user data from db if token is good
    db.User.findById(decoded.data).then(user => {
      //console.log(user);
      res.json(user)
    })
  }
})
>>>>>>> 51ec3eca6280fe5712df202cb142fd0435377808

router.route("/delete")
  .delete(auth, userController.delete);

module.exports = router;