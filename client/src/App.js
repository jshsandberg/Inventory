import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact.js";
import Inventory from "./pages/Inventory";
import InventoryFill from "./pages/InventoryFill"

function App() {
  return (



    <Router>
      <Route exact path="/inventory" component={Inventory}/>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/admin " component={Admin} />
      <Route exact path="/inventoryfill" component={InventoryFill} />
    </Router>

  )
}

export default App;
