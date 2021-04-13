import React from 'react';
import './SingleEvent.css';

const SingleEvent = (props) => {
    const {title, image} = props.ev;

    return (
        <div className="col-md-3 mt-4">
            <div className="card text-center" style={{'borderRadius': '18px'}}>
                <img className="card-img-top img-fluid" src={image} alt="" />
                <div className="card-body" style={{'background':props.color}}>
                    <p className="card-title">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;