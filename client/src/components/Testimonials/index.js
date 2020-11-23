import React from "react";
import "./style.css";

function Testimonials(props) {
    //console.log("I see testimonials");
    return (
        <div className="container-fluid" id="testimonial-container">
            <div className="row" id="testimonials">
                <h1 className="title">A Few Nice Words</h1>
                <hr />
                <div className="col-md-6">
                    <div className="blurb">
                        <i className="fa fa-quote-left"></i>
                        <q>This program allows me to save big on my taxes! Plus it allows me to track inventory in our many warehouses.</q>
                        <h5 className="author">Jeff Bezos, CEO</h5>
                        <h6 className="company">Amazon</h6>
                    </div>
                    <div className="blurb">
                        <i className="fa fa-quote-left"></i>
                        <q>For years I've been buying way to many spoons. This program has helped me buy the correct amount of spoons. It works great with forks and knives too!</q>
                        <h5 className="author">Ben Peters, Owner</h5>
                        <h6 className="company">Hive Coffee</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blurb">
                        <i className="fa fa-quote-left"></i>
                        <q>We are a bakery and we got the dough! Lots of it! But we can't keep track of it all. With this app we got a better grip on our dough.</q>
                        <h5 className="author">Sarah Kimmel, Owner</h5>
                        <h6 className="company">Sarah's Sweets</h6>
                    </div>
                    <div className="blurb">
                        <i className="fa fa-quote-left"></i>
                        <q>I run a furniture store and we can finally keep track of our couches. Plus I can sit on the couch and manage my inventory with my tablet!</q>
                        <h5 className="author">Ken Tulsa, President</h5>
                        <h6 className="company">Tusla Furniture Outlet</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;