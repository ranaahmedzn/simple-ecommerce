import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/google.png'
import facebookLogo from '../../assets/facebook.png'
import './SignUp.css'
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value
        console.log(email, password, confirmPassword)

        // simple validation
        if(password.length < 6){
            setError("Your password must be 6 character or longer!")
            return;
        }
        else if(password !== confirmPassword){
            setError("Your password did not matched!")
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess("Successfully created user!")
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })

    }

    return (
        <div className="form-container">
            <h3 className="form-title">Sign Up</h3>
            <form onSubmit={handleSignUp}>
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
                    <input type="password" name="confirm" id="confirm-password" required />
                </div>
                <p className='error-text'>
                    {error ? error : ''}
                </p>
                <p className='success-text'>
                    {success ? success : ''}
                </p>
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