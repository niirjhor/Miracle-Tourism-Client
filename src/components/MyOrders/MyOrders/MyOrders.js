import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'


const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-mountain-71110.herokuapp.com/bookingConfirmations')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //handle Delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to cancel the booking?")
        if (proceed) {
            const url = `https://blooming-mountain-71110.herokuapp.com/bookingConfirmations/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Booking has been cancelled')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
        return {
            handleDelete
        }
    }


    const matchedData = orders.filter(order => order?.email === user?.email)



    return (
        <div>
            <div className="container">

                <h1 className="m-5 p-5">MY ORDERS</h1>
                <Table responsive className="mb-5">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Destination</th>

                            <th>Full Name</th>

                            <th>Email</th>

                            <th>Address</th>
                            <th>Phone Number</th>


                            <th>Price</th>

                            <th>Order Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            matchedData.map(order =>
                                <tr>
                                    <td>{order?.tourName} </td>

                                    <td>{order?.name} </td>

                                    <td>{order?.email} </td>

                                    <td>{order?.Address} </td>
                                    <td>{order?.phoneNumber} </td>

                                    <td>{order?.price} </td>

                                    <td className="fw-bold">{order.status} </td>

                                    <button className="bg-danger text-white" onClick={() => handleDelete(order._id)}>Cancel</button>
                                </tr>
                            )}
                    </tbody>
                </Table>
                <div className="m-5">
                    <h4 >
                        Total Orders ={matchedData.length}
                    </h4></div>
            </div>
        </div>
    );
};

export default MyOrders;