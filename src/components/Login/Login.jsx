import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/google.png'
import facebookLogo from '../../assets/facebook.png'
import './Login.css'
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signIn } = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess("Successfully login!")
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className="form-container">
            <h3 className="form-title">Login</h3>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type={show ? "text" : "password"} name="password" id="password" required />
                    <span onClick={() => setShow(!show)} className='show-icon'>
                        {
                            show ?
                            <FontAwesomeIcon icon={faEyeSlash} />
                            : <FontAwesomeIcon icon={faEye} />
                        }
                    </span>
                </div>
                <p className='error-text'>
                    {error ? error : ''}
                </p>
                <p className='success-text'>
                    {success ? success : ''}
                </p>
                <input className="btn-submit" type="submit" value="Login" />
            </form>
            <p className="question">
                New to Ema-John?{" "}
                <span>
                    <Link to="/signup">Create New Account</Link>
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

export default Login;