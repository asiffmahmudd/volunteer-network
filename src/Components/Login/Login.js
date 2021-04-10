import React, { useContext } from 'react';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Login.css';
import google from '../../img/google.png';
import { handleSignIn } from '../../firebaseManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const signIn = () => {
        handleSignIn()
        .then(data => {
            setLoggedInUser(data);
            history.replace(from);
        })
    }
    return (
        <div className="login">
            <RegisterHeader></RegisterHeader>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="login-container rounded border">
                            <h4 className="text-center">Login With</h4>
                            <div className="google border p-2 mt-4" onClick={signIn}>
                                <span className="google-logo"><img src={google} alt=""/></span>
                                <span className="text-center w-100 d-inline-block">Continue with Google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;