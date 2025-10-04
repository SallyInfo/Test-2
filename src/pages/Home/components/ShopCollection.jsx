import React from 'react';
import '../../../assets/styles/ShopCollection.css';
import { Link } from 'react-router-dom';

const ShopCollection = () => {
  return (
    <section className="shop-collection-section">
      <h2 className="section-title">Shop Collection</h2>
      <div className="collection-grid">
        
        <div className="collection-item large-item">
          <div className="collection-item-box">
            <img 
              src="/src/assets/Images/1s-removebg-preview.png" 
              alt="Juniors Set" 
              className="collection-image" 
            />
          </div>
          <div className="item-content">
            <h3 className="item-title">Juniors Set</h3>
            <Link to="/allproducts/" className="item-link">Collections →</Link>
          </div>
        </div>
        
        <div className="collection-item small-item">
          <div className="collection-item-box">
            <img 
              src="/src/assets/Images/2s-removebg-preview.png" 
              alt="Men's Set" 
              className="collection-image" 
            />
          </div>
          <div className="item-content">
            <h3 className="item-title">Men's Set</h3>
            <Link to="/allproducts/" className="item-link">Collections →</Link>
          </div>
        </div>
        
        <div className="collection-item small-item">
          <div className="collection-item-box">
            <img 
              src="/src/assets/Images/3s-removebg-preview.png" 
              alt="Women's Set" 
              className="collection-image" 
            />
          </div>
          <div className="item-content">
            <h3 className="item-title">Women's Set</h3>
            <Link to="/allproducts/" className="item-link">Collections →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;