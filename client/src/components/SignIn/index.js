import React from "react";
import "./style.css";

function SignIn () {


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className="form-signin">
            <h1 className="h3 mb-3">Please sign in...</h1>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" />Remember me
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