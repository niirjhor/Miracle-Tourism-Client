import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BestHotel from '../BestHotel/BestHotel';

const BestHotels = () => {
    const [hotelPackages, setHotelPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages2')
            .then(res => res.json())
            .then(data => setHotelPackages(data))
    }, [])
    return (


        <div>
            <div className="container">
                <h2 className='text-info fw-bold py-3 my-4' id='offers' ><span className='text-warning fw-bold'> Top </span>Hotels in Bangladesh</h2>

                <Row xs={1} md={4} className="g-4">
                    {
                        hotelPackages.map(hotel => <BestHotel hotel={hotel}></BestHotel>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default BestHotels;