import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <br /> <br />
                    <input type="password" name="password" id="password" placeholder="Your Password" />
                    <br /> <br />
                    <input className="btn btn-warning" type="submit" value="Submit" /> <br /> <br />
                </form>
                <p>new to SHEBA Website? <Link to="/register"><button className="btn btn-warning">Create Account</button></Link></p>
                <div>-------or----------</div>
                <br />
                <button
                    className="btn btn-warning"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;