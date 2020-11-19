import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

function SignIn () {

  // const [formObject, setFormObject] = useState({})
  // const [authenticateSuccess, setAuthenticateSuccess] = useState(false);

  // const signin = e => {
  //   e.preventDefault();
  //   console.log(formObject);
  //   API.getUser({
  //     username: formObject.username,
  //     password: formObject.password
  //   }).then(res => {
  //       //console.log(res)
  //       //Once we get it figured out how do we authenticate this?
  //       this.password===API.getUser.password ? setAuthenticateSuccess(true) : console.log("Wrong password")  
  //       // How to remove inputs without reloading
  //       //window.location.reload()
  //   })
  //     .catch(err => console.log(err))

  //     console.log(authenticateSuccess);
  // }


  let history = useHistory();
  const [formObject, setFormObject] = useState({})
  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  console.log(formObject.username);
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject)
    API.getuser(
      formObject.username)
      .then((res) => {
        console.log(res)
        API.confirmuser(
          {
          username: formObject.username,
          password: formObject.password
          },
          //res.data[0].password
          )
       //history.push("/inventory")
      })
  }

  return (
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
  )
}

export default SignIn;