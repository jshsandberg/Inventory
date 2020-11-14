import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

function SignUp () {

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
    API.getuser(
      formObject.username)
      .then((res) => {
        const {password}=formObject.username;
        console.log(password);
        console.log(res)
       //history.push("/inventory")
      })
  }

  return (
    <div className="container">
    <div className="row">
    <div className="col-12">
      <form className="form-signin">
        <h1 className="h3 mb-3">Please sign in...</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="text" id="inputEmail" className="form-control" placeholder="Email address" name="username" required autofocus onChange={handleInputChange}/>
        <label for="inputPassword" className="sr-only" >Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" required onChange={handleInputChange}/>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="inverted" id="signup-login-btn" type="submit" onClick={handleFormSubmit}>Sign In <i class="fa fa-sign-in" aria-hidden="true"></i>
</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </form>
      </div>
      </div>
      </div>
  )
}

export default SignUp;