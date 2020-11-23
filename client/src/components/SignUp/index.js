import React, { useState, useEffect } from "react";
import "./style.css";
import API from '../../utils/API';
import validate from "../FormValidation/SignUpFormRules";
import {useHistory} from "react-router-dom";
import background from "../../assets/pexels-tiger-lily-4481323.jpg"

function SignUp() {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      signInCheck();
    }
  }, [errors]);

  function signInCheck() {
    console.log("No errors, continuing to save...");
  }

  function handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value })
  };

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    API.saveuser({
      name: values.firstName + " " + values.lastName,
      email: values.email,
      phone: values.phone,
      business: values.business,
      username: values.username,
      password: values.password,
      industry: values.industry
    })
      .then((res) => {
        if( res.status === 200 ){
          history.push("/inventory")
        }
    })
      .catch(err => console.log(err));
  };

  return (
    <div className="container-fluid" id="background">
      <div className="row">
        <div className="col-12">
          <form className="form-signup" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                  id="inputFirstName" 
                  placeholder="First Name" 
                />
                <small className="required text-muted">* Required</small><br/>
                {errors.firstName && (
                  <small id="nameHelp" className="signupHelp">{errors.firstName}</small>
                )}
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
                <small className="required text-muted">* Required</small><br/>
                {errors.lastName && (
                  <small id="nameHelp" className="signupHelp">{errors.lastName}</small>
                )}
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
                <small className="required text-muted">* Required</small><br/>
                {errors.email && (
                  <small id="nameHelp" className="signupHelp">{errors.email}</small>
                )}
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
                <small className="required text-muted">* Required</small><br/>
                {errors.phone && (
                  <small id="phoneHelp" className="signupHelp">{errors.phone}</small>
                )}
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
                <small className="required text-muted">* Required</small><br/>
                {errors.username && (
                  <small id="usernameHelp" className="signupHelp">{errors.username}</small>
                )}
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
                <small className="required text-muted">* Required</small><br/>
                {errors.password && (
                  <small id="passwordHelp" className="signupHelp">{errors.password}</small>
                )}
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
            <a href="/signin"><button type="submit" className="inverted" id="signup-login-btn">Sign Up</button></a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;