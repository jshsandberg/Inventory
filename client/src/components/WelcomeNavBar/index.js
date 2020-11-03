import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeNavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="./logo192.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                Inventory
            </a>
        </nav>
    );
}

export default WelcomeNavBar;
