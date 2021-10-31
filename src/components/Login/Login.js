import React, { useState } from 'react';
import useFirbase from '../../hooks/useFirebase';
import { getAuth } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const auth = getAuth();
    const [username, setUserName] = useState('');
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })

            .finally(() => setIsLoading(false));
    }


    return (
        <div className="mt-5 pb-5">

            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>

        </div >
    );
};

export default Login;