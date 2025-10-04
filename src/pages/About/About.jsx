import { useEffect } from 'react';
import "../../assets/styles/About.css"
import Abut from "./../../assets/Images/image.png"

const About = () => {
  useEffect (()=>{
      document.title=" Abut - 3legant."
    });
  return (
    <div className="about-page-container">

      <div className="about-text-content">
        <h2 className="main-title">About store</h2>
        <p className="main-subtitle">Discover our store story, values and mission.</p>
        

        <div className="two-column-layout">

          <div className="text-column">
            <h3 className="story-title">Our story</h3>
            <p>
              Siegant was founded in 2015 with a clear mission: to provide the 
              best golf equipment and supplies for enthusiasts of this
              elegant sport. We began with a vision that golf is not just a sport,
              but a lifestyle that reflects elegance, precision, and dedication.
            </p>
            <p>
              We believe that every golfer is unique, and each player’s
              style is like their own fingerprint. That’s why we work to provide
              a wide range of products that meet the needs of all players, from
              beginners to professionals.
            </p>
            <p>
              Over the years, we have expanded our product range to include
              everything the modern golfer needs, from golf clubs and balls
              to apparel and accessories, while maintaining our commitment
              to quality and elegance.
            </p>
          </div>

          <div className="image-column">
            <img src={Abut} alt="Golf equipment and glove" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;