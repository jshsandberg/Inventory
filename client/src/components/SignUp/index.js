import React, { useState } from "react";
import "./style.css";
import API from '../../utils/API';

function SignUp() {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
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
      shipping: formObject.shipping,
      username: formObject.username,
      password: formObject.password,
      industry: formObject.industry
    })
      .then(res => res.json(res))
      .catch(err => console.log(err));
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className="form-signup">
          <h2 align="center">Signup Today</h2>
          <p>Welcome! We're happy that you've decided to start you journey to inventory bliss with us. Fill out the form below to get started.</p>

            <div class="form-row">
            <div class="col-md-12 divider">
                <h4 align="center">General Information</h4>
              </div>
              <div class="form-group col-md-6">
                {/* <label for="inputFirstName">First Name</label> */}
                <input type="text" class="form-control" name="firstName" onChange={handleInputChange} id="inputFirstName" placeholder="First Name" />
              </div>
              <div class="form-group col-md-6">
                {/* <label for="inputLastName">Last Name</label> */}
                <input type="text" class="form-control" name="lastName" onChange={handleInputChange} placeholder="Last Name" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                {/* <label for="inputEmail">Email</label> */}
                <input type="text" class="form-control" name="email" onChange={handleInputChange} placeholder="Email Address" />
              </div>
              <div class="form-group col-md-6">
                {/* <label for="inputEmail">Phone</label> */}
                <input type="text" class="form-control" name="phone" onChange={handleInputChange} placeholder="Phone #" />
              </div>

              <div class="form-group col-md-6">
                {/* <label for="inputBusinessName">Buisness Name</label> */}
                <input type="text" class="form-control" name="business" onChange={handleInputChange} placeholder="Business Name" />
              </div>
              <div class="form-group col-md-6">
                {/* <label for="inputState">Industry</label> */}
                <select name="industry" onChange={handleInputChange} class="form-control">
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
              {/* <div class="form-group col-md-6">
                <label for="inputBusinessName">Shipping Address</label>
                <input type="text" class="form-control" name="shipping" onChange={handleInputChange} placeholder="Shipping" />
              </div> */}
              <div class="col-md-12 divider">
              <h4 align="center">Create Your Account Credentials</h4>
              </div>
              <div class="form-group col-md-6">
                {/* <label for="inputBusinessName">Username</label> */}
                <input type="text" class="form-control" name="username" onChange={handleInputChange} placeholder="Username" />
              </div>
              <div class="form-group col-md-6">
                {/* <label for="inputBusinessName">Password</label> */}
                <input type="password" class="form-control" name="password" onChange={handleInputChange} placeholder="Password" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  By checking this box, you agree to the <a href="*">terms and service</a> of this site.
                </label>
              </div>
            </div>
            <a href="/signin"><button type="submit" onClick={handleFormSubmit} class="btn btn-primary btn-lg btn-block">Sign Up</button></a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;