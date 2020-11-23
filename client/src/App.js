import React, {useEffect, useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact.js";
import Inventory from "./pages/Inventory";
import InventoryFill from "./pages/InventoryFill";
import API from './utils/API'

function App() {
  const [user, setUser] = useState(null);
 

  useEffect(()=> {
    if(localStorage.getItem("jwt")){
      const token = localStorage.getItem("jwt");
      //console.log(token)
      API.validateUser(token)
      .then(({data}) => {
        //console.log("YOUR USER ", data)
        setUser(data)
      })
      .catch(err => console.log(err))
    }else{
      //optional - redirect logic here if no token
    }
  }, [])

  

  return (

    <Router>
      <Route exact path="/inventory/user/:id" component={Inventory} /> 
      <Route exact path="/" component={Welcome} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/admin " component={Admin} />
      <Route exact path="/inventory/user/form/:id" component={InventoryFill} />
    </Router>

  )
}

export default App;
