import React, { useEffect, useState } from 'react';
import { serverUrl } from '../../serverUrl';
import Header from '../Header/Header';
import SingleEvent from '../SingleEvent/SingleEvent';
import './Home.css';

const Home = () => {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let url = "";
        document.getElementById("spinner").style.display = 'block';
        if(search === ""){
            url = serverUrl+'/events/';
        }
        else{
            url = serverUrl+`/event/${search}`;
        }

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setEvents(data);
            setLoading(false);
            document.getElementById("spinner").style.display = 'none';
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
                    !loading && events.length === 0 &&
                    <h1 className="text-center mt-4">Sorry, No event found</h1>
                }
                <div className="mt-4 d-flex justify-content-center">
                    <div class="spinner-border text-primary text-center" role="status" style={{'display': 'none'}} id="spinner">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                
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