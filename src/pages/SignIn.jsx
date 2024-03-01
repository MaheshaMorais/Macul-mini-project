import React from 'react';
import googleimg from "../assets/Google.jpg";
import './SignIn.css'; 
import logoimg from "../assets/Logo.png";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="left">
        <img src={logoimg} alt="Logo" />
      </div>
      <div className="right">
        <p>
          <span className='black-text'>Sign</span>
          <span className='red-text'>In</span>
          </p>
        <div className="google-signin">
          <input type="text" placeholder="Sign in with Google" />
          <img src={googleimg} alt="Google Icon" />
        </div>
        <h2 className='or-line'>or sign in with email</h2>
        <div className="input-group">
          <label htmlFor="username">User name or email</label>
          <input type="text" id="username" placeholder="Enter your username or email"/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <a href="#" className="forgot-password">Forgot?</a>
        </div>
        <button className='signin-button'>Sign In</button>
        <h1>Don't have an account? <a href="#">Sign up</a></h1>
      </div>
    </div>
  );
}

export default SignIn;
