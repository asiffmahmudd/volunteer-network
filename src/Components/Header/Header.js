import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo.png';
import { UserContext } from '../../App';
import { handleSignOut } from '../../firebaseManager';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const logout = () => {
        handleSignOut()
        .then(data => {
            if(data){
                setLoggedInUser({});
            }
        })
    }

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="img-fluid" alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donation">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            { !loggedInUser.isLoggedIn &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register"><button className="register-btn btn btn-primary">Register</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login"><button className="admin-btn btn btn-dark">Admin</button></Link>
                                </li>
                            </>
                            }
                            { loggedInUser.isLoggedIn &&
                                <li className="nav-item">
                                    <button className="register-btn btn btn-primary" onClick={logout}>Log Out</button>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;