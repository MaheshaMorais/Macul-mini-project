import React from "react";
import './Createacc.css';
import backgroundimg from "../assets/background.png";

function Create(){
return(
    <div className="create-account-container">
    <div className="left">
        <div className="input-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="User Name" />
        </div>
        <div className="input-group">
            <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
            <input type="password" placeholder="Password" />
        </div>
        <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree with Macul terms of services, privacy policies, and default notification settings.</label>
        </div>
        <button className="create-account-button">Create an Account</button>
        <p className="sign-in-text">Already have an account? <span className="reset-text">Sign in</span></p>
    </div>
    <div className="right">
        <img src={backgroundimg} alt="Background" />
    </div>
</div>
);
}

export default Create;
