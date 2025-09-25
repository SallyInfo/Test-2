import React from 'react';
import '../../../assets/styles/Categories.css';

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Categories</h2>
      <div className="categories-grid">
        <div className="category-item">
          <img src="/src/assets/Images/1c.png" alt="Golf Clubs" className="category-image" />
          <p className="category-name">Golf Clubs</p>
        </div>
        <div className="category-item">
          <img src="/src/assets/Images/2c.png" alt="Golf Balls" className="category-image" />
          <p className="category-name">Golf Balls</p>
        </div>
        <div className="category-item">
          <img src="/src/assets/Images/3c.png" alt="Golf Bags" className="category-image" />
          <p className="category-name">Golf Bags</p>
        </div>
        <div className="category-item">
          <img src="/src/assets/Images/4c.png" alt="Clothing & Rainwear" className="category-image" />
          <p className="category-name">Clothing & Rainwear</p>
        </div>
        <div className="category-item">
          <img src="/src/assets/Images/5c.png" alt="Footwear" className="category-image" />
          <p className="category-name">Footwear</p>
        </div>
        <div className="category-item">
          <img src="/src/assets/Images/6c.png" alt="Accessories" className="category-image" />
          <p className="category-name">Accessories</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;