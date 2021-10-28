import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-1'>
                    <div className="pt-5">
                        <h1><span className="Skip_color">Don't </span>Worry<br />
                            About the Cost</h1>
                        <br />
                        <br />
                        <h2>We are there for your  <span className="text-primary">safe travels</span> around the World!</h2><br />

                    </div>
                    <h2>Best Quality Service</h2>
                    <button className='btn btn-primary Button'>See the Best Offer</button>
                </div>
                <div className='col-lg-6 col-sm-1'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner"
                                src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='text-warning bg-primary'>Minimum Cost</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner"
                                src="https://images.unsplash.com/photo-1618939552738-000685e6b199?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRvdXJpc218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className='text-warning bg-primary'>Short Time Confirmation</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner"
                                src="https://images.unsplash.com/photo-1536698658763-878a02695d1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG91cmlzbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className='text-warning bg-primary'>Best Experts</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>


    );
};

export default Banner;