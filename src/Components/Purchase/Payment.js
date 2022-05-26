import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {productId} = useParams();
    return (
        <div>
            <p>Welcome to payment</p>
            <p>Pay For : {productId}</p>
        </div>
    );
};

export default Payment;