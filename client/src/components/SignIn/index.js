import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./style.css";
import API from "../../utils/API";
import Inventory from "../Inventory/Inventory"
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

function SignIn () {


  // Experiment IT WORKS BUT YOU CAN NOT SIGN IN WITH THE RIGHT PASSWORD, THEN SIGN AGAIN WITH A WRONG PASSWORD AND THEN SIGN IN WITH THE RIGHT PASSWORD
  const [isAuthorized, setIsAuthorized] = useState(null)
  const [userCode, setUserCode] = useState()

  // const UNAUTHORIZED = 401;
  // axios.interceptors.response.use(
  //   response => response,
  //   error => {
  //     const {status} = error.response;
  //     if (status === UNAUTHORIZED) {
  //       setIsAuthorized(false);
  //     } else 
  //     return Promise.reject(error);
  //  }
  // );

  //console.log(userCode)

  

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
  //console.log(formObject.username);
  function handleFormSubmit(event) {
    event.preventDefault();
    setUserCode(null)
    //console.log(formObject)
    // API.getuser(
    //   formObject.username)
    //   .then((res) => {
    //     // console.log(res.data[0]._id)
    //     //console.log(res.data)
    //     setUserCode(res.data[0]._id)
    //     // console.log(res.status)
        API.confirmuser(
          {
          username: formObject.username,
          password: formObject.password
          },
          //res.data[0].password
          )
          .then(async response => {
            const data = await response;
             if (data.status === 200) {
              //  try to gigure out how to get the suer code ffrom the response
              API.getuser(formObject.username).then(res => {
                console.log(res);
              setUserCode(res.data[0]._id)
              })
            } else {  
              console.log("hmmmm")
              setUserCode(null)
          
            }
            //console.log(isAuthorized)
          }
          )
          .catch(err => console.log(err))
          
       //history.push("/inventory")
      
  }
  console.log(isAuthorized)

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
                {userCode === null ? <small style={{ fontWeight: "heavy" }} id="password-incorrect" class="form-text text-muted">Incorrect Password</small> : <div></div>}
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