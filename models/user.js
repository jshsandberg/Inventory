const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type:String,
    //required:true,
    unique:true
  },
  name: {
    //This is the first and last name of the User
    type: String,
    //required: true
  },
  email: {
      //This is the user's email
    type: String,
    unique: true,
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
      default:"Not Given"
  },
  industry:{
      //User's business of industry
    type:String,
    default: ""
  },
  password:{
    type:String,
    //required:true
  }, 
  inventory: [{ type: Schema.Types.ObjectId, ref: 'Inventory' }]
});

module.exports = mongoose.model("user", userSchema);
