//resources
//url: http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose
//adding mongoose password authentication plus user lock

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


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
  username:{
    type:String,
    required:true,
    index:{unique:true}
  },
  password:{
    type:String,
    required:true
  }
});


userSchema.methods.authenticate = function(password) {      
  return this.password === password;
}

userSchema.plugin(passportLocalMongoose);
//const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
