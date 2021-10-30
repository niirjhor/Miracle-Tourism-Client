import React from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import './Besthotel.css'

const BestHotel = (props) => {

    const { name, img, details, location } = props.hotel;
    return (
        <div>
            <CardGroup>
                <Card className='h-100 card-lg bg-light'>
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {details.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{location}</small>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </div>
    );
};

export default BestHotel;