import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeNavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>
                <a className="navbar-brand" href="#">
                    Inventory
                </a>
                <div className="w-100 text-right">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item active">
                        <a href="/" className="nav-link ">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup" className="nav-link">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a href="signin" className="nav-link">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default WelcomeNavBar;
