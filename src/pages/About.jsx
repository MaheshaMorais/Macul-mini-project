import React from "react";
import './About.css';
import contactimg from "../assets/Contact.png";
import service1img from "../assets/Service1.png";
import service2img from "../assets/Service2.png";
import service3img from "../assets/Service3.png";
// Import other service images if needed

const About = () =>{
    return (
        <div>
            <div className="about-us-container">
                <div className="image-container">
                    <img src={contactimg} alt="About Us" />
                </div>
                <div className="content-container">
                    <h1 className="about-us-heading">About <span className="us">Us</span></h1>
                    <p className="about-us-paragraph">
                        Your paragraph text goes here.<br></br> It can be a brief description of your company or organization.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, ab impedit! Mollitia suscipit dignissimos nemo, odit, aliquid aliquam, eligendi similique consectetur nulla iure necessitatibus soluta voluptates fugit aspernatur voluptatibus ullam.
                    </p>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="our-services">
                <h2 className="our-services-heading">Our <span className="red-text">Services</span></h2>
                <div className="services-grid">
                    {/* Service Item 1 */}
                    <div className="service-item">
                        <img src={service1img} alt="Service 1" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 1</h3>
                            <p className="service-description">Description of Service 1</p>
                        </div>
                    </div>
                    {/* Service Item 2 */}
                    <div className="service-item">
                        <img src={service2img} alt="Service 2" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 2</h3>
                            <p className="service-description">Description of Service 2</p>
                        </div>
                    </div>
                    {/* Service Item 3 */}
                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>
                    {/* Repeat for other service items */}


                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>


                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={service3img} alt="Service 3" className="service-logo" />
                        <div className="service-info">
                            <h3 className="service-title">Service 3</h3>
                            <p className="service-description">Description of Service 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
