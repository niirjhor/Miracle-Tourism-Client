import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import './MobileApp.css'
const MobileApp = () => {
    return (
        <div>
            <div className="container my-4 py-4">
                <h2 className='text-info fw-bold py-3 my-4' id='offers' ><span className='text-warning fw-bold'> Our </span>Mobile App</h2>
                <Row xs={1} md={2} className="g-4">

                    <Col>
                        <Card>
                            <img className='top-img' src="https://image.freepik.com/free-vector/download-our-app-mobile-phone-advertising-banner-downloading-mobile-app-smartphone-with-empty-screen-your-app_349999-221.jpg" alt="" />

                        </Card>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <h1 className='text-success'>Have you tried our mobile <span className="text-primary fw-bold">App?</span></h1>
                        <h2 className='text-secondary'>Go and <span className="text-danger fw-bold">Download it</span>  to get all the exclusive Offers </h2>
                        <ListGroup>

                            <ListGroup.Item className='fw-bold' variant="primary">Easy Hotel Booking</ListGroup.Item>
                            <ListGroup.Item className='fw-bold' variant="secondary"> Tour and Travel Packages</ListGroup.Item>
                            <ListGroup.Item className='fw-bold' variant="success">Package Reviews and Ratings</ListGroup.Item>
                            <ListGroup.Item className='fw-bold' variant="danger">Manage your Bookings, Enquiry and Reviews</ListGroup.Item>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.booking&hl=en&gl=US" className="btn btn-danger mt-4 fw-bold" rel="noreferrer">Download Now</a>



                        </ListGroup>


                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default MobileApp;