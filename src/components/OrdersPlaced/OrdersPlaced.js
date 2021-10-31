import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Orderplaced.css'



const OrdersPlaced = () => {
    const { orderplacedId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/myorders';


    const { user } = useAuth();
    console.log(user);
    const [bookings, setBookings] = useState({});

    useEffect(() => {
        fetch(`https://blooming-mountain-71110.herokuapp.com/packages/${orderplacedId}`)
            .then(res => res.json())
            .then(data => setBookings(data))
        // 

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://blooming-mountain-71110.herokuapp.com/bookingConfirmations', data)
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
                {user.displayName &&
                    <input readOnly={true}{...register("name", { required: true, maxLength: 50 })} value={user.displayName} />
                }
                <br />
                <input {...register("email", { required: true, maxLength: 50 })} placeholder="Email" value={user.email} />

                <br />
                <input className="pending" {...register("status", { required: true, maxLength: 50 })} placeholder="Status" value="Pending" />

                {bookings.price && <input readOnly={true} {...register("price")} defaultValue={bookings.price} />}
                <br />
                {bookings.tourName &&
                    <input readOnly={true} {...register("tourName", { required: true })} value={bookings.tourName} />}

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