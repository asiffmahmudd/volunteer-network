import React from 'react';
import logo from '../../img/logo.png';
import AddEvent from '../AddEvent/AddEvent';
import './AdminPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import VolunteerList from '../VolunteerList/VolunteerList';

const AdminPanel = () => {

    const loadView = (event) =>{
        document.getElementsByClassName("active")[0].classList.remove('active');
        let x = document.getElementById('admin-view').children;
        for(let i = 0; i < x.length; i++){
            x[i].style.display = 'none';
        }
        document.getElementById(event.target.attributes["dataid"].nodeValue).style.display = 'block';
        event.target.classList.add('active');
    }

    

    return (
        <div className="admin-panel">
            <header>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="col-lg-12 logo-container">
                            <Link to="/"><img src={logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 heading">
                        <h5>Volunteer Register List</h5>
                    </div>
                </div>
            </header>

            <div className="admin-panel-container">
                <div className="sidebar">
                    <div className="container">
                        <div className="row">
                            <ul className="list-unstyled ml-5 mt-3">
                                <li className="mt-3 list-item active" dataid="volunteer-list" onClick={loadView}><FontAwesomeIcon icon={faUserFriends} /> Volunteer Register List</li>
                                <li className="mt-3 list-item" dataid="event-add" onClick={loadView}><FontAwesomeIcon icon={faPlus} /> Add Event</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div>
                        <div  id="admin-view">
                            <VolunteerList></VolunteerList>
                            <AddEvent></AddEvent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default AdminPanel;