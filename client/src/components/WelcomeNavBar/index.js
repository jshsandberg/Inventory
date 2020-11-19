import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeNavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="logo" id="logo"></img>
                        Shelf Keeper</Link>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link ">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                </ul>
                <Link to="/signin" className="nav-link">
                    <button type="button" id="get-started-button">Login <i className="fa fa-user" aria-hidden="true"></i></button>
                </Link>
            </div>
        </nav>
    );
}

export default WelcomeNavBar;