import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeFeatures(props) {
    return (
        <div className="container" id="features-container">
            <div className="row">
                <div className="col-12">
                    <h1 className="title">Why Shelf Keeper?</h1>
                    <hr />
                </div>
            </div>
            <div className="row features">
                <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                    <h2>Efficient</h2>
                    <p>Woosh! The sounds of speedy and lightweight. It goes together like peanut butter and jelly. It's just a win win!</p>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card" id="secure">
                <div className="card-body">
                    <i className="fa fa-shield" aria-hidden="true"></i>
                    <h2>Secure</h2>
                    <p>Using user authentication protocols to keep your data secure. Only you have access to your data.</p>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    <h2>Easy UI</h2>
                    <p>Ads? Gross! Our easy to use interface is not cluttered. Find your way to your items quickly and easily.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeFeatures;