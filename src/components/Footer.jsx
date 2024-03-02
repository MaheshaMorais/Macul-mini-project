// Footer.jsx

import React from 'react';
import './Footer.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.jpg'
import Tick1 from '../assets/Tick1.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer'>
        <div className="footer-container">
            <div className="footer-section">
                <p>Quick Links</p>
                <ul>
                    <li><a href="/"><img src={Tick1} alt="Tick" />Home</a></li>
                    <li><a href="/about"><img src={Tick1} alt="Tick" />About</a></li>
                    <li><a href="/store"><img src={Tick1} alt="Tick" />Store</a></li>
                    <li><a href="/contact"><img src={Tick1} alt="Tick" />Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <p>Extra Links</p>
                <ul>
                    <li><a href="#"><img src={Tick1} alt="Tick" />Our Services</a></li>
                    <li><Link to="/question"><img src={Tick1} alt="Tick" />Ask Questions</Link></li>
                    <li><Link to="/terms"><img src={Tick1} alt="Tick" />Terms of Use</Link></li>
                    <li><Link to="/privacy"><img src={Tick1} alt="Tick" />Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <p>Contact Info</p>
                <p className="contact-info">Your contact information here</p>
            </div>
            <div className="footer-section">
                <p>Follow Us</p>
                <ul>
                    <li><a href="https://www.facebook.com" className="social-icon"><img src={facebook} alt="Facebook" />Facebook</a></li>
                    <li><a href="https://www.instagram.com" className="social-icon"><img src={instagram} alt="Instagram" />Instagram</a></li>
                    <li><a href="https://www.twitter.com" className="social-icon"><img src={twitter} alt="Twitter" />Twitter</a></li>
                    <li><a href="https://www.linkedin.com" className="social-icon"><img src={linkedin} alt="LinkedIn" />LinkedIn</a></li>
                </ul>
            </div>
           
        </div>
        <p>Copyright ©2024 Macul. Design by Maculs’ developers</p>
        </div>
    );
}

export default Footer;
