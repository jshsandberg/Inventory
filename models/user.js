const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  email: {
    type: String,
    default: ""
  },
  phone:{
      type: Number,
      default:0000000000
  },
  business:{
      type:String,
      default:""
  },
  industry:{
    type:String,
    enum:['Advertising', 'Education', 'Electronics', 'Fashion', 'Food', 'Printing', 'Publishing', 'Other'],
    trim: true,
    required: true
  },
  shipping:{
      type:String,
      default:""
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
