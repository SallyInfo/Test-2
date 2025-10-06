import React from 'react';
import '../../../assets/styles/Categories.css';
import shop1 from "../../../../public/1c.png";
import shop2 from "../../../../public/2c.png";
import shop3 from "../../../../public/3c.png";
import shop4 from "../../../../public/4c.png";
import shop5 from "../../../../public/5c.png";
import shop6 from "../../../../public/6c.png";

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Categories</h2>
      <div className="categories-grid">
        <div className="category-item">
          <img src={shop1} alt="Golf Clubs" className="category-image" />
          <p className="category-name">Golf Clubs</p>
        </div>
        <div className="category-item">
          <img src={shop2} alt="Golf Balls" className="category-image" />
          <p className="category-name">Golf Balls</p>
        </div>
        <div className="category-item">
          <img src={shop3} alt="Golf Bags" className="category-image" />
          <p className="category-name">Golf Bags</p>
        </div>
        <div className="category-item">
          <img src={shop4} alt="Clothing & Rainwear" className="category-image" />
          <p className="category-name">Clothing & Rainwear</p>
        </div>
        <div className="category-item">
          <img src={shop5} alt="Footwear" className="category-image" />
          <p className="category-name">Footwear</p>
        </div>
        <div className="category-item">
          <img src={shop6} alt="Accessories" className="category-image" />
          <p className="category-name">Accessories</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;