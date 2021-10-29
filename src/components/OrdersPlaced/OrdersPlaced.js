import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrdersPlaced = () => {
    const { orderplacedId } = useParams();
    const [bookings, setBookings] = useState({});
    const [specificBookingsDetails, setSpecificBookingsDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${orderplacedId}`)
            .then(res => res.json())
            .then(data => setBookings(data.specificBookingsDetails))

    }, [])
    // useEffect(() => {
    //     const matchedData = bookings.find(
    //         (specificBookingsDetails) => specificBookingsDetails.orderplacedId === orderplacedId
    //     );
    //     setSpecificBookingsDetails(matchedData);
    // }, [])




    return (
        <div>
            <h2>Details of {bookings.name}</h2>
            <h2>this is booking: {orderplacedId}</h2>
        </div>
    );
};

export default OrdersPlaced;