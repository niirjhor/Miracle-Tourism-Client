import React, { useState } from 'react';
import useFirbase from '../../hooks/useFirebase';
import { getAuth } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const auth = getAuth();
    const [username, setUserName] = useState('');
    const { signInUsingGoogle, setIsLoading } = useFirbase();
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
        <div>

            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>

        </div >
    );
};

export default Login;