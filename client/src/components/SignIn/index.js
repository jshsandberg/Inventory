import React, { useState, useContext }  from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import "./style.css";
import API from "../../utils/API";

function SignIn () {
  // const [userCode, setUserCode] = useState("")
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();
  
  function handleInputChange(event) {
    event.persist();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value })
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log("sumbitting login data")
    const loginUser = {
      username: values.username,
      password: values.password,
    };
    const loginRes = await API.loginUser({
      username: loginUser.username,
      password: loginUser.password
    });
    setUser({
      token: loginRes.data.token,
      user: loginRes.data.user
    });
    console.log(user);
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/inventory");     
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
                {/* {userCode ?? <small style={{ fontWeight: "heavy" }} id="password-incorrect" class="form-text text-muted">Login failed</small>} */}
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