import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MobileApp from '../MobileApp/MobileApp';
import Banner from '../Banner/Banner';
import BestHotels from '../BestHotels/BestHotels';

import MainOffers from '../MainOffer/MainOffers';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div>
            <Banner></Banner>
            <MainOffers></MainOffers>
            <BestHotels></BestHotels>
            <MobileApp></MobileApp>

        </div>
    );
};

export default Home;