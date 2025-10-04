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

  if (loading) {
    return (
      <>
        <div className="f-cen g10 p16">
          {
            <>
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
            </>
          }
        </div>
      </>
    );
  }

  return (
    <div className="products-section">
      <div className="products-header f-bet">
        <h1 className="featured-title">Featured</h1>
      </div>
      <div className="custom-pagination"></div>
      <div style={{ padding: "30px 20px", overflow: "hidden" }}>

        <Swiper
          modules={[Pagination, Autoplay]}
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
            el: ".custom-pagination",
          }}

          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1440: {
              slidesPerView: 5,
              slidesPerGroup: 5,
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