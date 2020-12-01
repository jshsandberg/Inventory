const router = require("express").Router();
const userController = require("../../controllers/userController");
const auth = require("../../middleware/auth");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const db = require("../../models");
const user = require("../../models/user");
const expiresIn = 3600;

router.route("/")
  .get(auth, userController.getUser);

router.route("/register")
  .post(userController.register);

router.route("/login")
  .post(userController.login);

router.route("/validate")
  .post(userController.valid);

router.route("/update/:userId")
  .put(userController.update)

router.route("/delete")
  .delete(auth, userController.delete);
  //.get(userController.findById)
// router.route("/signup").post(userController.create);

// Matches with "/api/user/:id"
// router
//   .route("/:username")
//   .get(userController.find)
//   .put(userController.update)
  //.delete(userController.remove);

// router.post('/signin', passport.authenticate("local"), (req,res)=> {
//   res.json(req.user)
// }); 

// router
//   .route("/:id")
//   .get(userController.findById, () => console.log("I am here"))

// router.post('/signin', passport.authenticate("local"), (req,res)=> {
//   //console.log("it works");
//   const token = jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (expiresIn),
//     data: req.user._id
//   }, process.env.JWTSECRET || "");
//   res.json({...req.user._doc, token})
//   //console.log(res)
//   // res.send(res.json())
// }); 

// router.post("/validate", ({body:{token}},res)=> {
//   //console.log(token)
//   const decoded = jwt.decode(token, process.env.JWTSECRET || "");
//   //console.log(decoded);

//   //checking to see if token expired
//   if(+decoded.exp < (Date.now() / 1000)){
//     //console.log("no good!")
//     res.status(401).json({message: "Token expired, please log in again!"})
//   }else{
//     //gets user data from db if token is good
//     db.User.findById(decoded.data).then(user => {
//       //console.log(user);
//       res.json(user)
//     })
//   }
// })
module.exports = router;