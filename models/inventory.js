const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateAdded: {
    type: String,
    required: true
  },
  quantity: String,
  cycle: String,
  cost: String,
  value: String,
  sold: String
});

const Inventory = mongoose.model("Inventory", inventSchema);

module.exports = Inventory;
