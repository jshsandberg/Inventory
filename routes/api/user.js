//resource:https://www.geeksforgeeks.org/nodejs-authentication-using-passportjs-and-passport-local-mongoose/
const router = require("express").Router();
const userController = require("../../controllers/userController");

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

router.post('/signin', function(req, res) { 
      
    Users=new User({email: req.body.email, username : req.body.username}); 
  
          User.register(Users, req.body.password, function(err, user) { 
            if (err) { 
              res.json({success:false, message:"Your account could not be saved. Error: ", err})  
            }else{ 
              res.json({success: true, message: "Your account has been saved"}) 
            } 
          }); 
}); 


module.exports = router;