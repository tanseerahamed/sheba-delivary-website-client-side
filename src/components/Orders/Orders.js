import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth.js';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`https://agile-sands-48232.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))

    }, []);

    return (
        <div>
            <h2>You have placed: {orders.length} Orders</h2>

            <ul>
                { orders.map(order => <li 
                key = {order._id}>
            {order.name} : {order.email}</li> )}
            </ul>
        </div>
    );
};

export default Orders;