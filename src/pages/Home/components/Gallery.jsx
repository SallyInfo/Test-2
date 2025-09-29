import React from 'react';
import '../../../assets/styles/Gallery.css';

import image1 from '../../../assets/Images/1.jpg';
import image2 from '../../../assets/Images/2.jpg';
import image3 from '../../../assets/Images/3.jpg';
import image4 from '../../../assets/Images/4.jpg';
import image5 from '../../../assets/Images/5.jpg';


export default function Gallery() {
  return (
    <section className="instagram-section">
      
      <div className="instagram-header">
        <p className="instagram-newsfeed">NEWSFEED</p>
        <h2 className="instagram-title">Instagram</h2>
        <p className="instagram-description">Follow us on social media for more discount & promotions</p>
        <a href="https://www.instagram.com/" className="instagram-handle">@3legant_official</a>
      </div>

      <div className="instagram-marquee-container">
        <div className="instagram-marquee-content">
    
          <img src={image1} alt="صورة غولف 1" className="instagram-image" />
          <img src={image2} alt="صورة غولف 2" className="instagram-image" />
          <img src={image3} alt="صورة غولف 3" className="instagram-image" />
          <img src={image4} alt="صورة غولف 4" className="instagram-image" />
          <img src={image5} alt="صورة غولف 5" className="instagram-image" />
          
   
          <img src={image1} alt="صورة غولف 1" className="instagram-image" />
          <img src={image2} alt="صورة غولف 2" className="instagram-image" />
          <img src={image3} alt="صورة غولف 3" className="instagram-image" />
          <img src={image4} alt="صورة غولف 4" className="instagram-image" />
          <img src={image5} alt="صورة غولف 5" className="instagram-image" />
        </div>
      </div>
    </section>
  );
}