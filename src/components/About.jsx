import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-3 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Dunder Mifflin Book Company, Inc. is a fictional online bookstore featured in the American television series The Office. It is analogous to Wernham Hogg in the British original of the series, and Papiers Jennings and Cogirep in the French Canadian and French adaptations, respectively. Originally, the company was completely fictitious, but eventually, the brand was used to sell products at Staples and other office supply outlets.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
