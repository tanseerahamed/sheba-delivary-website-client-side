import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { _id } = useParams();

    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://agile-sands-48232.herokuapp.com/services/${_id}`)
        .then(res => res.json())
        .then(data => setService(data));
    } , [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <img src={service.img} alt="" />
            <p>{service.description}</p>
            <h3>Price: {service.price}</h3>
            <button className="btn btn-info m-3 p-2"><Link className="text-decoration-none fw-bolder text-dark" to='/bookingConfirmed'>Book Now: {service.name}</Link></button>
        </div>
    );
};

export default Booking;