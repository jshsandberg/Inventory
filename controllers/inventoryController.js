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
    //console.log(req.params)
    db.Inventory
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.status(200)
        db.User.updateOne({_id: dbModel.userId }, { $push: {inventory: dbModel}})
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
    console.log(req.params.id)
    console.log(req.body)
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
