import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeIntro(props) {
    return (
        <div className="container">
            <div className="row">
                <p className="text-center">Welcome to "Inventory Tracker", an easy to use inventory management system that allows you to excel at warehouse efficiency. Wether you run logistics in a warehouse or keeping track of coffee beans, our simple to use program allows anyone to easily manage and track their inventory. We offer a solution for anyone!</p>
            </div>
        </div>
    );
}

export default WelcomeIntro;
