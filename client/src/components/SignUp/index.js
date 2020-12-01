import React, { useState, useContext, } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import API from '../../utils/API';
import UserContext from "../../context/userContext";
// import validate from "../FormValidation/SignUpFormRules";

// import background from "../../assets/pexels-tiger-lily-4481323.jpg"

function SignUp() {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [error, setError] = useState();
  const { user, setUser } = useContext(UserContext);

  function handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value })
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const newUser = {
        name: values.firstName + " " + values.lastName,
        email: values.email,
        phone: values.phone,
        business: values.business,
        username: values.username,
        password: values.password,
        industry: values.industry
      }
      console.log(newUser)
      await API.saveUser(newUser);
      //console.log("i am here")
      const loginRes = await API.loginUser({
        username: newUser.username,
        password: newUser.password
      });
      setUser({
        token: loginRes.data.token,
        user: loginRes.data.user
      });
      console.log(user);
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/inventory");
    } catch (err) {
      if (err.response.data.msg) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <div className="container-fluid" id="background">
      <div className="row">
        <div className="col-12">
          <form className="form-signup" onSubmit={handleSubmit}>
          <h2 align="center">Signup Today</h2>
          <p>Welcome! We're happy that you've decided to start you journey to inventory bliss with us. Fill out the form below to get started.</p>
            <div className="form-row">
              {error && (
                <>
                  <div class="alert alert-danger" role="alert">
                    {error}
                  </div>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => setError(undefined)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </>
              )}
            <div className="col-md-12 divider">
                <h4 align="center">General Information</h4>
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputFirstName">First Name</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="firstName" 
                  onChange={handleChange}
                  id="inputFirstName" 
                  placeholder="First Name" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputLastName">Last Name</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="lastName" 
                  onChange={handleChange} 
                  placeholder="Last Name" 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                {/* <label for="inputEmail">Email</label> */}

                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  onChange={handleChange} 
                  placeholder="Email Address" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputEmail">Phone</label> */}
                <input 
                  type="number" 
                  className="form-control" 
                  name="phone" 
                  onChange={handleChange} 
                  placeholder="Phone #" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputBusinessName">Buisness Name</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="business" 
                  onChange={handleChange} 
                  placeholder="Business Name" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputState">Industry</label> */}
                <select name="industry" onChange={handleChange} className="form-control">
                  <option defaultValue>Choose your industry...</option>
                  <option data-value="advertising">Advertising</option>
                  <option data-value="education">Education</option>
                  <option data-value="electronics">Electronics</option>
                  <option data-value="fasion">Fashion</option>
                  <option data-value="food">Food</option>
                  <option data-value="printing">Printing</option>
                  <option data-value="publishing">Publishing</option>
                  <option data-value="other">Other</option>
                </select>
              </div>
              <div className="col-md-12 divider">
              <h4 align="center">Create Your Account Credentials</h4>
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputBusinessName">Username</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="username" 
                  onChange={handleChange} 
                  placeholder="Username" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputBusinessName">Password</label> */}
                <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  onChange={handleChange} 
                  placeholder="Password" 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  By checking this box, you agree to the <a href="*">terms and service</a> of this site.
                </label>
              </div>
            </div>
              <button type="submit" className="inverted" id="signup-login-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;