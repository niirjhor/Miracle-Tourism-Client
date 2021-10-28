import React from 'react';
import Banner from '../Banner/Banner';
import ClientsReviews from '../ClientsReviews/ClientsReviews';
import MainOffers from '../MainOffer/MainOffers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainOffers></MainOffers>
            <ClientsReviews></ClientsReviews>
        </div>
    );
};

export default Home;