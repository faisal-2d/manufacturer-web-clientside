import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user);
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;