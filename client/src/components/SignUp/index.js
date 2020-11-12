import React, { useState } from "react";
import "./style.css";
import API from '../../utils/API';

import background from "../../assets/pexels-tiger-lily-4481323.jpg"

function SignUp() {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveuser({
      name: formObject.firstName + " " + formObject.lastName,
      email: formObject.email,
      phone: formObject.phone,
      business: formObject.business,
      username: formObject.username,
      password: formObject.password,
      industry: formObject.industry
    })
      .then(res => console.log(res.config.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="container-fluid" id="background">
      <div className="row">
        <div className="col-12">
          <form className="form-signup">
          <h2 align="center">Signup Today</h2>
          <p>Welcome! We're happy that you've decided to start you journey to inventory bliss with us. Fill out the form below to get started.</p>
            <div className="form-row">
            <div className="col-md-12 divider">
                <h4 align="center">General Information</h4>
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputFirstName">First Name</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="firstName" 
                  onChange={handleInputChange} 
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
                  onChange={handleInputChange} 
                  placeholder="Last Name" 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                {/* <label for="inputEmail">Email</label> */}

                <input 
                  type="text" 
                  className="form-control" 
                  name="email" 
                  onChange={handleInputChange} 
                  placeholder="Email Address" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputEmail">Phone</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="phone" 
                  onChange={handleInputChange} 
                  placeholder="Phone #" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputBusinessName">Buisness Name</label> */}
                <input 
                  type="text" 
                  className="form-control" 
                  name="business" 
                  onChange={handleInputChange} 
                  placeholder="Business Name" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputState">Industry</label> */}
                <select name="industry" onChange={handleInputChange} className="form-control">
                  <option selected>Choose your industry...</option>
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
                  onChange={handleInputChange} 
                  placeholder="Username" 
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="inputBusinessName">Password</label> */}
                <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  onChange={handleInputChange} 
                  placeholder="Password" 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                  By checking this box, you agree to the <a href="*">terms and service</a> of this site.
                </label>
              </div>
            </div>
            <a href="/signin"><button type="submit" onClick={handleFormSubmit} className="inverted" id="signup-login-btn">Sign Up</button></a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;