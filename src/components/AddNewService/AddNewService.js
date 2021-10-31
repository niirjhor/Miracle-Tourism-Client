import React from 'react';
import axios from 'axios';
import { Modal, Button, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewService.css'



const AddNewService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-mountain-71110.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Packages added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='Add-Booking'>

            <h2 className='fw-bold text-warning'>Add a New Tour Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <input {...register("tourName", { required: true, maxLength: 50 })} placeholder="Tour Name" />

                <br />
                <input {...register("offer", { required: true, maxLength: 100 })} placeholder="Offer" />

                <br />
                <input {...register("duraion", { required: true, maxLength: 100 })} placeholder="Duration" />

                <br />
                <input type='number' {...register("duraion", { required: true, maxLength: 100 })} placeholder="Package Price" />

                <br />


                <textarea {...register("description", { required: true, maxLength: 100 })} placeholder="Description" />
                <br />

                <input type="number" {...register("bookingID")} placeholder="Booking ID" />  <br />

                <input {...register("img")} placeholder="image url" />
                <br />
                <input className='btn btn-warning' type="submit" />
            </form>


        </div >
    );
};

export default AddNewService;