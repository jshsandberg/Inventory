const db = require("../models");

// Defining methods for the userController
module.exports = {
  find:function(req, res) {
    db.User
      .find({username: req.params.username})
      .then(dbModel=> {
        res.json(dbModel);
        console.log(req.params.username);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // let newUser = new User({
    //   username: req.body.username,
    //   password: req.body.password
    // });
    // newUser.save((err,user)=>{
    //   if(err){throw err;}
    //   res.json(user);
    // });
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find:function(req, res) { 
  //   db.User
  //     .find({username: req.params.username})
  //     .then((req)=>{
  //       // if(!req.body.username){ 
  //       //   res.json({success: false, message: "Username was not given"}) 
  //       // } else { 
  //       //   if(!req.body.password){ 
  //       //     res.json({success: false, message: "Password was not given"}) 
  //       //   }else{ 
  //       //     passport.authenticate('local', function (err, user, info) {  
  //       //        if(err){ 
  //       //          res.json({success: false, message: err}) 
  //       //        } else{ 
  //       //         if (! user) { 
  //       //           res.json({success: false, message: 'username or password incorrect'}) 
  //       //         } else{ 
  //       //           req.login(user, function(err){ 
  //       //             if(err){ 
  //       //               res.json({success: false, message: err}) 
  //       //             }else{ 
  //       //               const token =  jwt.sign({userId : user._id, username:user.username}, secretkey, {expiresIn: '24h'}) 
  //       //               res.json({success:true, message:"Authentication successful", token: token }); 
  //       //             } 
  //       //           }) 
  //       //         } 
  //       //        } 
  //       //     })(req, res); 
  //       //   } 
  //       // } 
  //     }).catch(err => res.status(422).json(err));
   
  // }
    

};
