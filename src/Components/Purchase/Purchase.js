import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div>
            <p>User Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Purchase;