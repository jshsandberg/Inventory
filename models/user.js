const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
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

const User = mongoose.model("User", userSchema);

module.exports = User;
