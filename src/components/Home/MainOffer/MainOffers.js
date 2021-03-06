import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const MainOffers = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://blooming-mountain-71110.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className='container-fluid'>
            <h2 className='text-info fw-bold py-3 my-4' id='offers' ><span className='text-warning fw-bold'> Top </span>Tour Packages</h2>

            <Row xs={1} md={3} className="g-4">
                {
                    packages.map(offer => <Offer offer={offer}></Offer>)
                }

            </Row>
        </div>
    );
};

export default MainOffers;