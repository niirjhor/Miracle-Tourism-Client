import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'


const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookingConfirmations')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //handle Delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to cancel the booking?")
        if (proceed) {
            const url = `http://localhost:5000/bookingConfirmations/${id}`;
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
            <h3 class="card-title text-info fw-bold">My Placed Orders </h3>


            <Row>
                <Col>
                    {
                        matchedData.map(order => <div key={order._id}>
                            <div className='page-container'>
                                <div className='row container d-flex justify-content-center'>
                                    <div className='card-body'>
                                        <div className='col-lg-12 col-sm-1 grid-margin stretch-card'>
                                            <div className='card-body'>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Package Name</th>
                                                            <th>Email</th>
                                                            <th>Phone Number</th>
                                                            <th>Package Cost</th>
                                                            <th>Delete</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{order.tourName}</td>
                                                            <td>{order.email}</td>
                                                            <td>{order.phoneNumber}</td>
                                                            <td>{order.price}</td>
                                                            <td>
                                                                <button className='btn btn-warning' onClick={() => handleDelete(order._id)}>Cancel</button>
                                                            </td>
                                                            <td>
                                                                <button className='btn btn-warning' >{order.status}</button>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>



                        </div>)
                    }
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h2 className='total-orders'>Total Orders:{matchedData.length}</h2>
                </Col>
            </Row>
        </div>
    );
};

export default MyOrders;