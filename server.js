const express = require("express");
const path =require("path");
const mongoose = require("mongoose");
require("dotenv").config()
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const passport = require('./passport');
app.use(passport.initialize());
app.use(passport.session());
//static authenticate method of model in local strategy

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Add routes, both API and view
app.use(routes);
app.use(express.json());
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react", {
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
