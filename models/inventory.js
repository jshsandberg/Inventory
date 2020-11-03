const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventSchema = new Schema({
  title: {
    //business name and that will give us the inventory
    //this will give us an id
    //business name could be the ID
    type: String,
    required: true
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  inventory: [String]
});

const Inventory = mongoose.model("Inventory", inventSchema);

module.exports = Inventory;
