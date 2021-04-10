import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="bg-img"></div>
            <Header></Header>
            <div className="container text-center">
                <h2 className="mt-5">I GROW BY HELPING PEOPLE IN NEED</h2>
                <div className="row mt-4">
                    <div className="col-md-4 mx-auto">
                        <div className="input-group">
                            <input type="search" className="form-control search" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <button type="button" className="search-btn btn btn-primary">search</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;