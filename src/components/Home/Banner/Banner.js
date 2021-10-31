import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-sm-1'>
                    <div className="pt-5">
                        <h1><span className="Skip_color">Don't </span>Worry<br />
                            About the<span className="Skip_color"> Cost</span></h1>
                        <br />
                        <br />
                        <h2>We are there for your  <span className="text-primary">safe travels</span> around the World!</h2><br />

                    </div>
                    <h2>Best Quality Service</h2>
                    <button href='#offer' className='btn btn-primary Button'>See the Best Offer</button>
                </div>
                <div className='col-lg-6 col-sm-1'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner"
                                src="https://akashbariholidays.com/resources/akasbari_holidays_tour_packages/package_52/pattaya.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='text-warning'>Minimum Cost</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner"
                                src="https://akashbariholidays.com/resources/akasbari_holidays_tour_packages/package_68/santosa.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className='text-warning'>No hidden charge</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner"
                                src="https://akashbariholidays.com/resources/akasbari_holidays_tour_packages/package_15/umrah%20tour%20package.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className='text-warning'>Safest Umrah Package</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>


    );
};

export default Banner;