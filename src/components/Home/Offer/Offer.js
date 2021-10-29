import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'

const Offer = (props) => {
    const { _id, tourName, duraion, offer, img, description } = props.offer;


    return (
        <div>
            <Col className='container'>

                <Card className='card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='cards'>
                        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-danger">{tourName}</span> <span className="float-end fw-bold text-primary">{offer}</span> </div>
                        <h5 className="card-title">{description} <br /> <span className="text-secondary"> Duration:{duraion}</span></h5>
                        <div className="text-center my-4">
                            <Link to={`/orderplaced/${_id}`}>
                                <button className='btn btn-warning' >Check details</button>   </Link></div>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Offer;