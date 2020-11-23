import React from "react";
import {useState} from "react";
import {useHistory, Link} from "react-router-dom";
import axios from "axios";
import "./style.css";
import API from "../../utils/API";
import Inventory from "../Inventory/Inventory"
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

function SignIn () {


 
 
  const [userCode, setUserCode] = useState("")

  


  let history = useHistory();
  const [formObject, setFormObject] = useState({})
  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  //console.log(formObject.username);
  function handleFormSubmit(event) {
    event.preventDefault();
        API.signIn(
          {
          username: formObject.username,
          password: formObject.password
          },
        ).then(({data}) => {
            console.log("got the user! ", data);
            localStorage.setItem("jwt", data.token);
            history.push('/inventory/user/' + data._id)
          })
          .catch(err => {
            setUserCode(null)
            })      
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="form-signin" onSubmit={handleFormSubmit}>
              <h1 className="h3 mb-3">Please sign in...</h1>
              <div className="form-group">
              <label for="inputEmail" className="sr-only">Email Address</label>
              <input name="username" onChange={handleInputChange} type="" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              </div>
              <div className="form-group">
                <label for="inputPassword" className="sr-only">Password</label>
                <input name="password" onChange={handleInputChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                {userCode ?? <small style={{ fontWeight: "heavy" }} id="password-incorrect" class="form-text text-muted">Login failed</small>}
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="inverted" id="signup-login-btn" type="submit">Sign In <i class="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;