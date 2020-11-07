//resources
//url: http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose
//adding mongoose password authentication plus user lock

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    // bcrypt = require('bcrypt'),
    // SALT_WORK_FACTOR=10;
// const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
  name: {
    //This is the first and last name of the User
    type: String,
    required: true
  },
  email: {
    //This is the user's email
    type: String,
    default: "",
    required: true
  },
  phone: {
    //user's phone number
    type: Number,
    default:0000000000
  },
  business: {
    //business name
    type:String,
    default:"",
    required: true
  },
  industry: {
      //User's business of industry
    type:String,
    enum:['Advertising', 'Education', 'Electronics', 'Fashion', 'Food', 'Printing', 'Publishing', 'Other'],
    trim: true,
    required: true
  },
  username: {
    type:String,
    required:true,
    index:{unique:true}
  },
  password: {
    type:String,
    required:true
  },
  // loginAttempts: {
  //   type:Number,
  //   default:0
  // },
  // lockUntil: {
  //   type:Number
  // }
});

// userSchema.virtual('isLocked').get(function(){
//   return !!(this.lockUntil && this.lockUntil > Date.now());
// });

// userSchema.pre('save', function(next){
//   var user = this;
//   //only hash the password if it has been modified (or is new)
//   if(!user.isModified('password')){
//     return next();
//   }

//   //generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
//     if(err){
//       return next(err);
//     }
//     //hash the password using our new salt
//     bcrypt.hash(user.password, salt, function(err,hash){
//       if(err){
//         return next(err);
//       }
//       console.log('HASH: ',hash);
//       user.password=hash;
//       console.log('USER PASSWORD: ', user.password);
//       next();
//     });
//   });
// });

// //Thank you google and stack overflow
// userSchema.methods.comparePassword = function(candidatePassword, cb){
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
//     if(err){
//       return cb(err);
//     }
//     cb(null, isMatch);
//   });
// };

//url: http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose
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

// UserSchema.statics.getAuthenticated = function(username, password, cb) {
//   this.findOne({ username: username }, function(err, user) {
//       if (err) return cb(err);

//       // make sure the user exists
//       if (!user) {
//           return cb(null, null, reasons.NOT_FOUND);
//       }

//       // check if the account is currently locked
//       if (user.isLocked) {
//           // just increment login attempts if account is already locked
//           return user.incLoginAttempts(function(err) {
//               if (err) return cb(err);
//               return cb(null, null, reasons.MAX_ATTEMPTS);
//           });
//       }

//       // test for a matching password
//       user.comparePassword(password, function(err, isMatch) {
//           if (err) return cb(err);

//           // check if the password was a match
//           if (isMatch) {
//               // if there's no lock or failed attempts, just return the user
//               if (!user.loginAttempts && !user.lockUntil) return cb(null, user);
//               // reset attempts and lock info
//               var updates = {
//                   $set: { loginAttempts: 0 },
//                   $unset: { lockUntil: 1 }
//               };
//               return user.update(updates, function(err) {
//                   if (err) return cb(err);
//                   return cb(null, user);
//               });
//           }

//           // password is incorrect, so increment login attempts before responding
//           user.incLoginAttempts(function(err) {
//               if (err) return cb(err);
//               return cb(null, null, reasons.PASSWORD_INCORRECT);
//           });
//       });
//   });
// };

// userSchema.statics.failedLogin = {
//   NOT_FOUND:0,
//   PASSWORD_INCCORECT:1,
//   MAX_ATTEMPTS: 5
// }

//userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;
