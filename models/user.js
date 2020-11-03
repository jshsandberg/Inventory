//resources
//url: http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose
//adding mongoose password authentication plus user lock

const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    SALT_WORK_FACTOR=10;

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
  },
  username:{
    type:String,
    required:true,
    index:{unique:true}
  },
  password:{
    type:String,
    required:true
  },
  loginAttempts:{
    type:Number,
    required:true,
    default:0
  },
  lockUntil:{
    type:Number
  }

});

userSchema.virtual('isLocked').get(function(){
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.pre('save', function(next){
  var user = this;
  //only hash the password if it has been modified (or is new)
  if(!user.isModified('password')){
    return next();
  }

  //generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err){
      return next(err);
    }
    //hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err,hash){
      if(err){
        return next(err);
      }
      user.password=hash;
      next();
    });
  });
});

//Thank you google and stack overflow
userSchema.methods.comparePassword = function(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  });
};

// userSchema.methods.incLoginAttempts=function(cb){
//   if(this.lockUntil && this.lockUntil < Date.now()){
//     return this.update({
//       $set: {loginAttempts:1},
//       $unset:{lockUntil:1}
//     },cb);
    
//   }
//   var updates = {$inc:{loginAttempts:1}};
//   if(this.loginAttempts+1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked){
//     return this.update(updates,cb);
//   }
// }

// userSchema.statics.failedLogin = {
//   NOT_FOUND:0,
//   PASSWORD_INCCORECT:1,
//   MAX_ATTEMPTS: 5
// }

const User = mongoose.model("User", userSchema);

module.exports = User;
