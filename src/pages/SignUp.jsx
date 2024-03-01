import React from 'react';
import googleimg from "../assets/Google.jpg";
import './SignIn.css'; // Importing the CSS file for styling
import logoimg from "../assets/Logo_2.png";

const SignUp = () => {
  return (
    <div className="signin-container">
      <div className="left">
        <img src={logoimg} alt="Logo" />
      </div>
      <div className="right">
        <p>
          <span className='black-text'>Sign</span>
          <span className='red-text'>Up</span>
          </p>
        <div className="google-signin">
          <input type="text" placeholder="Sign in with Google" />
          <img src={googleimg} alt="Google Icon" />
        </div>
        <h2 className='or-line'>or</h2>
        <div className="input-group">
      
          <input type="text" id="username" placeholder="Continue with email"/>
        </div>
        <h1>By creating an account you agree with our <a href="#">Terms of Services privacy policies and our notifications settings</a></h1>
       <h1>Already have an account? <a href="#">Sign in</a></h1>
      </div>
    </div>
  );
}

export default SignUp;

