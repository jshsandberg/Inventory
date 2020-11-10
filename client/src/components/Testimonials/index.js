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
                        <i class="fa fa-quote-left"></i>
                        <q>This software has truly revolutionized the way we run our business!</q>
                        <h5 className="author">Jeff Bezos, CEO</h5>
                        <h6 className="company">Amazon</h6>
                    </div>
                    <div className="blurb">
                        <i class="fa fa-quote-left"></i>
                        <q>As a mom and pop coffee shop, keeping track of spoons and coffee beans is way eaiser! It saves us time which saves us money.</q>
                        <h5 className="author">Ben Peters, Owner</h5>
                        <h6 className="company">Hive Coffee</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blurb">
                        <i class="fa fa-quote-left"></i>
                        <q>As a mom and pop coffee shop, keeping track of spoons and coffee beans is way eaiser! It saves us time which saves us money.</q>
                        <h5 className="author">Ben Peters, Owner</h5>
                        <h6 className="company">Hive Coffee</h6>
                    </div>
                    <div className="blurb">
                        <i class="fa fa-quote-left"></i>
                        <q>As a mom and pop coffee shop, keeping track of spoons and coffee beans is way eaiser! It saves us time which saves us money.</q>
                        <h5 className="author">Ben Peters, Owner</h5>
                        <h6 className="company">Hive Coffee</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
