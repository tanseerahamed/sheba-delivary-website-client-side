import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id,name, price, description, img} = props.service;
    return (
        <div className="single-member">
            <img src={img} alt="" fluid />
            <h4 className='text-primary'>{name}</h4>
            <p>Price: {price}</p>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary mb-2">Get Your Service: {name}</button>
            </Link>
        </div>
    );
};

export default Service;