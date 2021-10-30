import React, { useEffect, useState } from 'react';
import { Col, Table } from 'react-bootstrap';

const ManageAllOrders = () => {

    //GET User Data
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookingConfirmations')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    //handle Delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete the user?")
        if (proceed) {
            const url = `http://localhost:5000/bookingConfirmations/${id}`
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

    


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Serial</th>

                        <th>Booked Package</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>

                        <th>Status</th>
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
                                <button className="btn bg-warning p-2">Pending</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};


export default ManageAllOrders;