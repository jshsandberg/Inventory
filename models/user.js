//resources
//url: http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose
//adding mongoose password authentication plus user lock

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR=10;


const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    index:{unique:true}
  },
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
      default:"Not Given"
  },
  industry:{
      //User's business of industry
    type:String,
    enum:['Advertising', 'Education', 'Electronics', 'Fashion', 'Food', 'Printing', 'Publishing', 'Other'],
    trim: true,
    default: null
  },
  password:{
    type:String,
    required:true
  }, 
  inventory: 
    [{ type: Schema.Types.ObjectId, ref: 'Inventory' }]
});

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) return next(err);

          // set the hashed password back on our user document
          user.password = hash;
          next();
      });
  });
});


//ORIGINAL
userSchema.methods.comparePassword = async function(candidatePassword) {
 const result = await bcrypt.compare(candidatePassword, this.password)
 return result;
};

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return cb(err);
//       cb(null, isMatch);
//   });
// };


userSchema.plugin(passportLocalMongoose);
//const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
