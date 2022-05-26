import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true)
    useEffect(() => {
        axios.get(` http://localhost:5000/orders/${user.email}`)
        .then(data => setOrders(data.data))
        setOrdersLoading(false)
    },[])

    if(loading || ordersLoading){
        return <Loading></Loading>
    }
  
    return (
        <div>
            <p>My orders {orders.length}</p>
        </div>
    );
};

export default MyOrders;