import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/google.png'
import facebookLogo from '../../assets/facebook.png'

const SignUp = () => {
    return (
        <div className="form-container">
            <h3 className="form-title">Sign Up</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" required />
                </div>
                <input className="btn-submit" type="submit" value="Sign Up" />
            </form>
            <p className="question">
                Already have an account? 
                <span>
                    <Link to="/login"> Login</Link>
                </span>
            </p>
            <p className="or-line">
                <span></span>
                Or
                <span></span>
            </p>
            <div className="continue-with-social">
                <img src={googleLogo} alt="" />
                <span>Continue with Google</span>
            </div>
            <div className="continue-with-social">
                <img src={facebookLogo} alt="" />
                <span>Continue with Facebook</span>
            </div>
        </div>
    );
};

export default SignUp;