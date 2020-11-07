import React from "react";
import "./style.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Testimonials(props) {
    return (
        <div className="container-fluid" id="testimonial-container">
            
            <div className="row" id="testimonials">
                <h1 className="title">A Few Nice Words</h1>
                <hr />
                <div className="col-md-6">
                    <div className="blurb">
                        <p>This software has truly revolutionized the way we run our business!</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blurb">
                        <p>As a mom and pop coffee shop, keeping track of spoons and coffee beans is way eaiser! It saves us time which saves us money.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
