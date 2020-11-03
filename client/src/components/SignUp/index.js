import React from "react";;
import "./style.css";

function SignUp () {
  return (
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputFirstName">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputLastName">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" placeholder="Lat Name" />
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="email" />
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="inputBusinessName">Buisness Name</label>
          <input type="text" class="form-control" id="inputBusinessName" placeholder="Business" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Industry</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
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
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            By checking this box, you agree to the <a href="*">terms and service</a> of this site.
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  )
}

export default SignUp;