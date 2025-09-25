import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import Products from './components/Products.jsx';
import Categories from './components/Categories.jsx';
import CountingTimer from './components/CountingTimer.jsx';
import ShopCollection from './components/ShopCollection.jsx';
import Newsletter from './components/Newsletter.jsx';
import Latest from './components/Latest.jsx';
import Gallery from './components/Gallery.jsx'


function Home() {
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

  return (
  
    <div className="home-container">
      <HeroSection />
      <Products/>
      <Categories />
      <CountingTimer duration={ONE_DAY_IN_MS} />
      <ShopCollection/>
      
      <Latest/>
      <Newsletter/>
      <Gallery/>

    </div>
  );
}

export default Home;