const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventSchema = new Schema({
  // name: {
  //   type: String,
  //   required: true
  // },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  // inventory: {
    name:{
      type:String,
      default:"",
      required:true
    },
    quantity:{
      type:Number,
      default:0
    },
    dateCreated:{
      type: Date,
      default: Date.now
    },
  // },

  dateAdded: {
    type: String,
    required: true
  },
  quantity: String,
  cycle: String,
  cost: String,
  value: String,
  sold: String,
  userId: String,
  
});

const Inventory = mongoose.model("Inventory", inventSchema);

module.exports = Inventory;
