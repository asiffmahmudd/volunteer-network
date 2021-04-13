import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SingleEvent from '../SingleEvent/SingleEvent';
import './Home.css';

const Home = () => {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let url = "";
        if(search === ""){
            url = 'https://volunteernetworkserver.herokuapp.com/events/';
        }
        else{
            url = `https://volunteernetworkserver.herokuapp.com/event/${search}`;
        }

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setEvents(data)
        })
    }, [search]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const colors = ['tomato', 'slateblue', 'sandybrown', 'dodgerblue'];
    let colorIndex = -1;
    let flag = 0;

    return (
        <div className="home">
            <div className="bg-img"></div>
            <Header></Header>
            <div className="container text-center">
                <h2 className="mt-5">I GROW BY HELPING PEOPLE IN NEED</h2>
                <div className="row mt-4">
                    <div className="col-md-4 mx-auto">
                        <div className="input-group">
                            <input type="search" className="form-control search" onChange={handleSearch} placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <button type="button" className="search-btn btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    events.length === 0 &&
                    <h1 className="text-center mt-5">Sorry, No event found</h1>
                }
                <div className="row mt-5">
                    <div class="card-deck">
                        {
                            events.map(ev => {
                                if(flag === 0){
                                    colorIndex++;
                                }
                                else{
                                    colorIndex--;
                                }
                                if(colorIndex === 4){
                                    colorIndex = 3;
                                    flag = 1;
                                }
                                else if(colorIndex === -1){
                                    colorIndex = 0;
                                    flag = 0;
                                }
                                return <SingleEvent key={ev._id} ev={ev.event} color={colors[colorIndex]}></SingleEvent>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;