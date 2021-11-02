import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { _id } = useParams();

    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${_id}`)
        .then(res => res.json())
        .then(data => setService(data));
    } , [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <img src={service.img} alt="" />
            <p>{service.description}</p>
            <h3>Price: {service.price}</h3>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary mb-2">Book Now: {service.name}</button>
            </Link>
        </div>
    );
};

export default Booking;