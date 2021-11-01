import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Register = () => {
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
                <h2>Register: Create Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /> <br />
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login"><button className="btn btn-warning">Login</button></Link></p>
                <div>----------or-------------</div> <br />
                <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;