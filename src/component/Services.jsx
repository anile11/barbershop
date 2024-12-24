import React from 'react';
import './Services.css';
import haircutImg from './images/saloon2.jpeg';
import shaveImg from './images/shave.jpg';
import beardImg from './images/beard.jpeg';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <h2 className="services-title">Our Services</h2>
                <div className="services-list">
                    <div className="service-card">
                        <img
                            className="service-image"
                            src={haircutImg}
                            alt="Haircut Service"
                        />
                        <h3 className="service-title">Haircut</h3>
                        <p className="service-description">
                            Fresh haircuts styled to perfection by our professionals.
                        </p>
                    </div>
                    <div className="service-card">
                        <img
                            className="service-image"
                            src={shaveImg}
                            alt="Shave Service"
                        />
                        <h3 className="service-title">Shave</h3>
                        <p className="service-description">
                            Traditional shaves for a clean and smooth finish.
                        </p>
                    </div>
                    <div className="service-card">
                        <img
                            className="service-image"
                            src={beardImg}
                            alt="Beard Trim Service"
                        />
                        <h3 className="service-title">Beard Trim</h3>
                        <p className="service-description">
                            Precision grooming and trimming for a polished beard.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
