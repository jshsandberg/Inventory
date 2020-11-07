const { User } = require("../models");
const db = require("../models");

// Defining methods for the userController
module.exports = {
  findById:function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
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
  }
};
