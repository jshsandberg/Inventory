import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeTitle(props) {
    return (
        <div className="container">
            <div className="row">
                <h1 className="title">Why Inventory Tracker</h1>
            </div>
            <hr />

        </div>
    );
}

export default WelcomeTitle;
