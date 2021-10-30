import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">MiracleTourism.com <i>is a great tour and travel </i> management company to look after you in your travels and journeys.We have more than 50 offices around the world to serve the people.Do enjoy and be safe.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com/">Travel</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Visa</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Tour Guide</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Transport</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Mobile App</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Career</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">About Us</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Contact Us</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Contribute</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Privacy Policy</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.miracletourstravel.com">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text text-center">Copyright &copy; 2017 All Rights Reserved by Miracle Tourism Ltd.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;