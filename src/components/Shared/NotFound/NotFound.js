import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='container not-found'>
                <h2>Error : 404</h2>
                <h2 className='text-danger pb-5 mb-5'>Please Reload or Try again later with correct address</h2>
            </div>
        </div>
    );
};

export default NotFound;