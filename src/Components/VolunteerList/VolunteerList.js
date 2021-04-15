import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './VolunteerList.css';

const VolunteerList = () => {

    const [volunteers, setVolunteers] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        fetch('https://volunteernetworkserver.herokuapp.com/volunteerList')
        .then(res => res.json())
        .then(data => {
            setVolunteers(data)  
        });
    }, [change]);

    const handleDelete = (id) => {
        setChange(true);
        fetch(`https://volunteernetworkserver.herokuapp.com/deleteVolunteer/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Volunteer deleted successfully");
                setChange(true);
            }
        })
    }
    
    return (
        <div id="volunteer-list">
            <div className="list-container">
                <div className="">
                    {   volunteers.length === 0 &&
                        <h1 className="m-5">There are no volunteers registered at this moment</h1>
                    }
                    {
                        volunteers.length > 0 &&
                        <>
                            <table className="table table-borderless">
                                <thead className="table-heading">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Registering Date</th>
                                        <th scope="col">Volunteer Task</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                    
                                <tbody>
                                    {
                                        volunteers.map(volunteer =>  
                                                    <tr>
                                                        <td>{volunteer.volunteer.fullname}</td>
                                                        <td>{volunteer.volunteer.email}</td>
                                                        <td>{volunteer.volunteer.date}</td>
                                                        <td>{volunteer.volunteer.task}</td>
                                                        <td><span onClick = {() => handleDelete(`${volunteer._id}`)} className="delete"><FontAwesomeIcon icon={faTrashAlt} color="white" /></span></td>
                                                    </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;