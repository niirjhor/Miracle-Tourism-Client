import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const Offer = (props) => {
    const { tourName, duraion, offer, img, description } = props.offer;


    return (
        <div>
            <Col className='container'>

                <Card className='card'>
                    <Card.Img variant="top" className='doctor-img' src={img} />
                    <Card.Body>
                        <Card.Title>Test Name: {tourName}</Card.Title>
                        <p className='text-info fw-bold'>Rate: {offer} Taka</p>
                        <p>Result in: {description} days</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Offer;