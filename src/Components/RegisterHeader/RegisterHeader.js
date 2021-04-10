import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './RegisterHeader.css';

const RegisterHeader = () => {
    return (
        <div className="register-header">
            <div className="container">
                <div className="row mt-5 mb-5 text-center">
                    <div className="col-md-12 logo-container">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterHeader;