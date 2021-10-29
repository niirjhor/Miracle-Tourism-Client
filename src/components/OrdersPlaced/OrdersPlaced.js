import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const OrdersPlaced = () => {
    const { orderplacedId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/myorders';


    const { user } = useAuth();
    console.log(user);
    const [bookings, setBookings] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${orderplacedId}`)
            .then(res => res.json())
            .then(data => setBookings(data))
        // 

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/bookingConfirmations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully Done');
                    reset();
                    history.push(redirect_url)
                }
            })

    }


    return (
        <div className='Add-Booking'>

            <h2 className='fw-bold text-warning'>Confirm Tour Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name ", { required: true, maxLength: 50 })} placeholder="Name of the orderer" value={user.displayName} />

                <br />
                <input {...register("email", { required: true, maxLength: 50 })} placeholder="Email" value={user.email} />

                <br />

                <input {...register("tourName", { required: true })} value={bookings.tourName} />

                <br />
                <input type='text' {...register("Address", { required: true, maxLength: 50 })} placeholder="Full Address" />
                <br />
                <input type='number' {...register("phoneNumber", { required: true, maxLength: 50 })} placeholder="Phone Number" />
                <br />
                <input className='btn btn-warning' type="submit" />
            </form>


        </div >
    );
};

export default OrdersPlaced;