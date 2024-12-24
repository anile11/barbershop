import React, { useState } from 'react';
import './Saloon.css';
import saloon1 from './images/shop1.jpg';
import saloon2 from './images/srinu.jpg';
import saloon3 from './images/saloon3.jpeg';
import saloon4 from './images/shop2.jpg';
import saloon5 from './images/durga.jpg';

const Saloon = () => {
    const images = [saloon1, saloon2, saloon3, saloon4, saloon5];
    const [currentImage, setCurrentImage] = useState(0);

    // Handlers for navigation
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img
                    className="carousel-image"
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                />
                <button className="carousel-btn prev" onClick={prevImage}>
                    &#10094;
                </button>
                <button className="carousel-btn next" onClick={nextImage}>
                    &#10095;
                </button>
            </div>
            <h3 className="carousel-info">
                Showing {currentImage + 1} of {images.length}
            </h3>
        </div>
    );
};

export default Saloon;
