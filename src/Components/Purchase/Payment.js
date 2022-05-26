import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Common/Loading';

const Payment = () => {
    const {orderId} = useParams();
    const {data : product, isLoading, refetch} = useQuery(['payment', orderId], () => axios.get(`http://localhost:5000/order/${orderId}`)
    .then()
    )

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <p>Welcome to payment</p>
            <p>Pay For : {orderId}</p>
        </div>
    );
};

export default Payment;