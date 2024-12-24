import React from 'react';
import './Contact.css'; // Import CSS for styling
import img1 from './images/srinu.jpg';
import img2 from './images/durga.jpg';

const ShopTimings = () => {

    const info = [
        {
            name: 'srinu',
            exp: '30 years of experience',
            special: 'CLASSICAL AND AUTHENTIC STYLES',
            mobile: '9705359912',
            image: img1


        },
        {
            name: 'durga prasad',
            exp: '7 years of experience',
            special: 'ALL MODERN HAIR STYLES',
            mobile: '9502416340',
            image: img2

        },
    ];

    return (
        <div>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>SHOP TIMINGS</h1>
            <br />
            <h2 style={{ textAlign: 'center' }}>6.00 AM To 9.10 PM</h2>

            {
                info.map((person, index) => {
                    return (


                        <div className="card-container">
                            <div className="card" style={{ width: '23rem' }}>
                                <img src={person.image} className="card-img-top" alt="srinu" />
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <p className="card-text">{person.exp}<br /><small>{person.special}</small></p>
                                    <br />
                                    <h3>MOBILE : {person.mobile}</h3>
                                    <br />
                                </div>
                            </div>
                        </div>

                    );

                })
            }

        </div>
    );
};

export default ShopTimings;
