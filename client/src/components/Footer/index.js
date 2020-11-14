import React from "react";
import "./style.css";

import github from "../../assets/GitHub-Mark-Light-120px-plus.png"

function Footer (props) {


  return (
    <>
        <div className="container-fluid" id="footer-container" style={props.style}>
        <div className="row" id="footer">
            <div className="col-md-4" id="footer-links">
                Links to Pages
            </div>
            <div className="col-md-4" id="footer-logo">
                <h1>Inventory</h1>
                <hr />
                <p>Inventory © 2020</p>
            </div>
            <div className="col-md-4" id="footer-team">
                <table width="100%" cellPadding="5">
                    <tr>
                        <td>Amin Bouzoita <img src={github} alt="github" className="github" /></td>
                    </tr>
                    <tr>
                        <td>Crystal Han <img src={github} alt="github" className="github" /></td>
                    </tr>
                    <tr>
                        <td>Eric Folenta <img src={github} alt="github" className="github" /></td>
                    </tr>
                    <tr>
                        <td>Josh Sandberg <img src={github} alt="github" className="github" /></td>
                    </tr>
                    <tr>
                        <td>Spencer Smith <img src={github} alt="github" className="github" /></td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer;