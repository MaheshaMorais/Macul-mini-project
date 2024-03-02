// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar-container">
            <div className="navbar-text">Macul</div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/store" className="nav-link">Store</Link> 
                <Link to="/contact" className="nav-link">Contact</Link>
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-input" />
                    <span className="search-icon">&#128269;</span>
                </div>
                <Link to="/sign-in" className="nav-link">Login</Link>
                <Link to="/sign-up" className="signup-button">Signup</Link>
                

            </div>
        </div>
    );
}

export default Navbar;
