import React from "react";
import './Createacc.css';
import backgroundimg from "../assets/background.png";

function Create(){
return(
    <div className="create-account-container">
    <div className="left1">
    <div className="input-group1">
          <label htmlFor="username">First Name</label>
          <input type="text" id="username" placeholder="First Name"/>
          <label htmlFor="username">Last Name</label>
          <input type="text" id="username" placeholder="Last Name"/>
        </div>
        <label htmlFor="email">Email</label>
        <div className="input-group1">
            <input type="email" placeholder="Email" />
        </div>
        <label htmlFor="email">Password</label>
        <div className="input-group1">
            <input type="email" placeholder="8+Characters" />
        </div>
        <div className="terms1">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree with Macul terms of services, privacy policies, and default notification settings.</label>
        </div>
        <button className="create-account-button">Create an Account</button>
        <p className="sign-in-text">Already have an account? <span className="reset-text">Sign in</span></p>
    </div>
    <div className="right1">
        <img src={backgroundimg} alt="Background" />
    </div>
</div>
);
}

export default Create;
