const { Mongoose } = require("mongoose");
const db = require("../models");

// Defining methods for the inventoryController
module.exports = {
  findById: function(req, res) {
    db.Inventory
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Inventory
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.status(200)
        db.User.update({_id: "5fb3458d40738038e4547590" }, { $push: {inventory: dbModel}})
        .then(res => {
          //res.status(200)
          console.log("updated")
        })
    
          //res.json(dbModel)
      
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Inventory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Inventory
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
