const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    //This is the first and last name of the User
    type: String,
    required: true
  },
  email: {
      //This is the user's email
    type: String,
    default: ""
  },
  phone:{
      //user's phone number
      type: Number,
      default:0000000000
  },
  business:{
      //business name
      type:String,
      default:""
  },
  industry:{
      //User's business of industry
    type:String,
    enum:['Advertising', 'Education', 'Electronics', 'Fashion', 'Food', 'Printing', 'Publishing', 'Other'],
    trim: true,
    required: true
  },
  shipping:{
      //User's shipping address
      type:String,
      default:""
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
