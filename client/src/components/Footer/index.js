import React from "react";
import "./style.css";

import github from "../../assets/GitHub-Mark-Light-120px-plus.png"

function Footer (props) {


  return (
    <>
        <div className="container-fluid" id="footer-container" style={props.style}>
        <div className="row" id="footer">
            <div className="col-12" id="footer-logo">
                <h1>Shelf Keeper</h1>
                <hr />
                <p>Inventory © 2020</p>
            </div>
        </div>
        <div className="row" id="footer">
            <div className="col-12" id="footer-team">
                <p>• Amin Bouzoita <img src={github} alt="github" className="github" /> |
                Crystal Han <img src={github} alt="github" className="github" /> |
                Eric Folenta <img src={github} alt="github" className="github" /> | 
                Josh Sandberg <img src={github} alt="github" className="github" /> | 
                Spencer Smith <img src={github} alt="github" className="github" /> •
                </p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer;