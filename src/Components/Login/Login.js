import React from 'react';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Login.css';
import google from '../../img/google.png';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {

    const {handleSignIn} = useAuth()
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const signIn = async () => {
        await handleSignIn()
        history.replace(from);
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