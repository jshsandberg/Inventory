import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import video from "../../assets/production_ID_4281239.mp4"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeHero(props) {
    return (
        <header>
            <div className="overlay"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={video} type="video/mp4" />
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <h1 className="display-3">Shelf Keeper</h1>
                        <p className="lead mb-0">Robust yet easy to use inventory management for any business!</p>
                        <Link to="/signup"><button className="inverted" id="video-btn">Get Started Today</button></Link>
                    </div>
                </div>
            </div> 
        </header>
    );
}

export default WelcomeHero;
