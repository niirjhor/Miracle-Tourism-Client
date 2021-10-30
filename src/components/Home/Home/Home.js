import React from 'react';
import MobileApp from '../../MobileApp/MobileApp';
import Banner from '../Banner/Banner';
import BestHotels from '../BestHotels/BestHotels';

import MainOffers from '../MainOffer/MainOffers';

const Home = () => {
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