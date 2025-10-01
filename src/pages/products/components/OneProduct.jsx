import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneCard from "./../../../components/custom/OneCard";
import { getProductById } from "./../../../services/foodService";
// import Loader from "./../../../components/custom/Loader";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./../../../assets/styles/main.css"
import FakeCard from "../../../components/custom/FakeCard";


function OneProduct() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    async function fetchProduct() {
      setError(null);
      setLoading(true);
      try {
        const data = await getProductById(id);
        setProduct(data.data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (error) {
    return <div style={{ textAlign: "center", color: "red", padding: "20px" }}>
      Error loading product: {error}
    </div>;
  }

  if(loading){
    return(
      <>
      <div className="f-cen g15">
      {
        <>
        <FakeCard/>
        </>
      }

      </div>
      </>
    );
  }

  if (!product) return <div style={{ textAlign: "center", padding: "20px" }}>No product found</div>;

  return (
    <>
      <h1 style={{ padding: "20px", width: "100%", textAlign: "center" }}>product</h1>
      <div className="f-cen p16">
        <OneCard  key={product.id} id={product.id} image={product.image} />
        <div className="product p16 one-card">
          <p className="p8">Name : {product.name}</p>
          <p className="p8">Old Price : {product.old_price}$</p>
          <p className="p8">Price : {product.price}$</p>
          <p className="p8">Discount Rate : {product.discount_rate}</p>  
          <p className="p8 m-bottom50"> Star : 
            <FaStar className="ster txt-b" />
            <FaStar className="ster txt-b" />
            <FaStar className="ster txt-b" />
            <FaStar className="ster txt-b" />
            <FaStar className="ster txt-b" />
            </p>
          <Link to="/Login"  className='btn' style={{borderRadius:"20px", padding:"20px 30px"}}> Ok </Link>
        </div>
      </div>
    </>
  );
}
export default OneProduct;
