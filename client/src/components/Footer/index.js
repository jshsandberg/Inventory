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
                <p>• Amin Bouzoita <a href="https://github.com/Aminbouzouita"><img src={github} alt="github" className="github" /></a> |
                Crystal Han <a href="https://github.com/hancc1006"><img src={github} alt="github" className="github" /></a> |
                Eric Folenta <a href="https://github.com/efolenta"><img src={github} alt="github" className="github" /></a> | 
                Josh Sandberg <a href="https://github.com/jshsandberg"><img src={github} alt="github" className="github" /></a> | 
                Spencer Smith <a href="https://github.com/spencer-alan"><img src={github} alt="github" className="github" /></a> •
                </p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer;