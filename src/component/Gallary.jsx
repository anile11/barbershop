import React from 'react';
import './Gallary.css'; // Import CSS for styling
import img1 from './images/newspaper.jpeg';
import img2 from './images/watercan.jpeg';
import img3 from './images/shop1.jpg';
import img4 from './images/shop2.jpg';
import img5 from './images/saloon1.jpeg';
import img6 from './images/saloon1.jpeg';


const Gallery = () => {
    const images = [
        { id: 1, src: img1, alt: 'Shop Image 1' },
        { id: 2, src: img2, alt: 'Shop Image 2' },
        // { id: 3, src: img3, alt: 'Shop Image 3' },
        // { id: 4, src: img4, alt: 'Shop Image 4' },
        { id: 5, src: img3, alt: 'Shop Image 5' },
        { id: 6, src: img4, alt: 'Shop Image 6' },
    ];

    return (

        <>

            <div className="gallery-container">


                <h2>SAANTHI HAIR STYLES</h2>
                <div className="gallery-grid">
                    {
                        images.map((image) => (
                            <div key={image.id} className="gallery-item">
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))
                    }
                </div>
               
            </div>
            <div style={{display:'flex',flexDirection:'column',marginTop:'20px',textAlign:'center'}}>
            <h3>1.FREE DRINKING WATER</h3>
                <h3>2.NEWS PAPER</h3>
                <h3>3.SAFE AND CUSTOMER SATISFACTION</h3>
                <h3>4.LOYALTY SERVICE</h3>
            </div>
          
        </>

    );
};

export default Gallery;
