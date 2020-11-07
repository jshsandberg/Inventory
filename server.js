const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const routes = require("./routes");
const routeapi=require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;
const User = require('./models/User');
//const db = require("./models");
//const db = require('./config/production').mongoURI;

//static authenticate method of model in local strategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Add routes, both API and view
app.use(routes);
app.use(express.json());
// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactuserinventory");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactuserinventory", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})
 .then(() => console.log('MongoDB Connected!'))
 .catch(error => console.log('MongoDB did not connect: ', error));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
