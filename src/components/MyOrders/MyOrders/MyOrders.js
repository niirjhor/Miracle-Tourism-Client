import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';


const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookingConfirmations')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/bookingConfirmations/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div>
            <h3 class="card-title">My Placed Orders </h3>

            <Row>
                <Col>
                    {
                        orders.map(order => <div key={order.id}>
                            <div className='page-container'>
                                <div className='row container d-flex justify-content-center'>
                                    <div className='card-body'>
                                        <div className='col-lg-12 grid-margin stretch-card'>
                                            <div className='card-body'>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Package Name</th>
                                                            <th>Booking ID</th>
                                                            <th>Phone Number</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{order.tourName}</td>
                                                            <td>{order._id}</td>
                                                            <td>{order.phoneNumber}</td>
                                                            <td>
                                                                <button className='btn btn-warning' onClick={() => handleDelete(order._id)}>Delete</button>
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
                    <h2>Total Orders:</h2>
                </Col>
            </Row>
        </div>
    );
};

export default MyOrders;