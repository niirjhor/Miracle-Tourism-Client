import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import "./ManageOrders.css"

const ManageAllOrders = () => {

    //GET User Data
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-mountain-71110.herokuapp.com/bookingConfirmations')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    //handle Delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete the user?")
        if (proceed) {
            const url = `https://blooming-mountain-71110.herokuapp.com/bookingConfirmations/${id}`
            fetch(url, {
                method: "DELETE"
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('User is deleted Successfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
        return {
            handleDelete
        }
    }

    //Approval Handle Section

    const handleApproval = order => {
        const proceed = window.confirm("Are you sure to approve the Order?")
        if (proceed) {
            order.status = "Approved"
            const url = `https://blooming-mountain-71110.herokuapp.com/bookingConfirmations/${order._id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {

                    alert('Order is Approved')
                    const remaining = orders.map(matchedOrder => {
                        if (matchedOrder._id === orders._id) {
                            return order
                        }
                        return matchedOrder;

                    })

                    setOrders(remaining);

                })
            return handleApproval;

        }


    }



    return (
        <div className="container table-responsive">
            <Row>
                <Col>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Booked Package</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Delete Order</th>
                                <th>Action</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        {orders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order?.tourName}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.phoneNumber}</td>
                                    <td>
                                        <button onClick={() => handleDelete(order._id)} className="btn bg-warning p-2">Delete</button>
                                    </td>
                                    <td>
                                        {order?.status === "Approved" ?
                                            <button className="btn bg-info text-muted">Approved</button> :
                                            <button onClick={() => handleApproval(order)} className="btn bg-warning p-2">Approve</button>}
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" >{order.status}</button>
                                    </td>

                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Col>
            </Row>

        </div>
    );
};


export default ManageAllOrders;