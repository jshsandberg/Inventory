import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeNavBar(props) {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="../../../public/logo192.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                Bootstrap
            </a>
        </nav>
    );
}

export default WelcomeNavBar;
