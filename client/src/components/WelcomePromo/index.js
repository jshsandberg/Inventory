import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function WelcomePromo(props) {
    return (
        <div className="container-fluid" id="promo-container">
            <div className="row" id="promo">
                <div className="col-md-8 col-sm-12">
                    <h2>Excited to get started? We thought so!</h2>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Link to="/signup"><button id="promo-button">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
}

export default WelcomePromo;
