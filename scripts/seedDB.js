const mongoose = require("mongoose");
const User = require("../models/User");
const Inventory = require("../models/Inventory");
const db = require("../models");
const passportLocalMongoose = require('passport-local-mongoose');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactuserinventory"
  
);

  //var userSeed = [
  var Spencer = new User({
      name: "Spencer Smith",
      email: "spencersemail@gmail.com",
      phone:000-000-0000,
      business: "Spencers Coffee Shop",
      industry: "Food",
      shipping:"1000 UCI Drive",
      username:"spenceUser",
      password:"Daspencer",
    });
   var Josh=new User( {
      name: "Josh Sandberg",
      email: "joshemail@gmail.com",
      phone:111-111-1111,
      business: "Josh's Fashionable Business",
      industry: "Fashion",
      shipping:"500 UCI Drive",
      username:"joshUser",
      password:"TheJosh",
    });
  var Eric = new User({
      name: "Eric Folenta",
      email: "Ericsemail@gmail.com",
      phone:222-222-2222,
      business: "Eric's Printing Shop",
      industry: "Printing",
      shipping:"200 UCI Drive",
      username:"ericUser",
      password:"DasEric",
    });
   var Amin = new User({
      name: "Amin Bouzouita",
      email: "aminsemail@gmail.com",
      phone:333-333-3333,
      business: "Amin's Advertisement",
      industry: "Advertising",
      shipping:"100 UCI Drive",
      username:"aminUser",
      password:"printAmin",
    });
var Crystal = new User({
      name: "Crystal Han",
      email: "crystalsemail@gmail.com",
      phone:555-555-5555,
      business: "Crystal's Flying Saucer",
      industry: "Electronics",
      shipping:"39 UCI Drive",
      username:"crystalUser",
      password:"saucerCrystal",
    });
  //];

  //save User to data base
  Spencer.save(function(err){
      if(err){throw err;}
  });
  //save User to data base
  Josh.save(function(err){
    if(err){throw err;}
});
 //save User to data base
 Eric.save(function(err){
    if(err){throw err;}
});
//save User to data base
Amin.save(function(err){
    if(err){throw err;}
});
//save User to data base
Crystal.save(function(err){
    if(err){throw err;}
});
  
//   db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


  const inventorySeed = [
    {
      title: "Spencer's Coffee Shop",
        // url string for thumbnail image
      thumbnail: "",
      inventory: ["Coffee Beans", "Cups", "Milk", "Vanilla extract"]
    },
    {
      title: "Josh's Fashionable Business",
        // url string for thumbnail image
      thumbnail: "",
      inventory: ["Fabric", "Black Leather", "Zippers", "Cotton"]
    },
    {
      title: "Eric's Printing Shop",
        // url string for thumbnail image
      thumbnail: "",
      inventory: ["Paper", "Ink", "Pencils", "Pen"]
    },
    {
        title: "Amin's Advertisement",
        // url string for thumbnail image
      thumbnail: "",
      inventory: ["Paper", "Ink", "Pencils", "Pen", "Flowers"]
    },
    {
      title: "Crystal's Flying Saucer",
        // url string for thumbnail image
      thumbnail: "",
      inventory: ["Wires", "Pliers", "Multimeters", "Power Supply", "Breadboard"]
    }
  ];
  
  db.Inventory
    .remove({})
    .then(() => db.Inventory.collection.insertMany(inventorySeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });