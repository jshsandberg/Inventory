import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/home" component={Home} />
    </Router>
  )
}

export default App;
