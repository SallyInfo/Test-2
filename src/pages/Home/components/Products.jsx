import "../../../assets/styles/cards.css";
import Card from "../../../components/custom/Card.jsx";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/foodService.js";
import FakeCard from "../../../components/custom/FakeCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Products = () => {
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setError(null);
      setLoading(true);

      try {
        const data = await getAllProducts();
        setProducts(data.data.products);
      }
       catch (err) {
        console.error(err.message);
        setError(error);

      } 
      finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (error) {
    return error
  }

   if(loading){
    return(
      <>
      <div className="f-cen g10 p16">
      {
        <>
        <FakeCard/>
        <FakeCard/>
        <FakeCard/>
        <FakeCard/>
        </>
      }
      </div>
      </>
    );
  }

  return (
    <div>
      <div style={{padding:"16px ",width :"250px"}}>
     <h1  style={{padding:"20px ",width :"250px"}}>Featured</h1>
       <div style={{position:"relative",left:"1200px",top:"-40px"}}  className="custom-pagination"></div>
       </div>
      <div style={{padding:"30px 20px", overflow:"hidden"}}>
        
        <Swiper
        modules={[Pagination ,Autoplay]}
        spaceBetween={4}
        slidesPerView={5}
        slidesPerGroup={5} 
        loop={false}
        autoplay={{
          disableOnInteraction: false, 
          delay: 2000,  
          pauseOnMouseEnter: true, 
        }}   

           pagination={{
    clickable: true,
    el: ".custom-pagination",   // نخلي النقاط في مكان مخصص
  }}

          breakpoints={{
    0: {          // من 0px لغاية 640px (موبايل)
      slidesPerView: 1,
    },
    640: {        // من 640px لغاية 1024px (تابلت)
      slidesPerView: 2,
    },
    1024: {       // من 1024px وطالع (ديسكتوب)
      slidesPerView: 3,
    },
    1440: {       // شاشات أكبر (ديسكتوب واسع)
      slidesPerView: 4,
    },
  }}
      >

        {
          product.map((product, index) => (
            <SwiperSlide key={index}>
            <Card
            id={product.id}
            discount_rate={product.discount_rate}
            image={product.image}
            name={product.name}
            old_price={product.old_price}
            price={product.price}
            />
            </SwiperSlide>
          ))}
          </Swiper>
         
      </div>
    </div>
  );
};

export default Products;