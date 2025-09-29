import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./../../../components/custom/Card";
import { getProductById } from "./../../../services/foodService";
import Loader from "./../../../components/custom/Loader";

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
  });

  if (error) {
    return <div style={{ textAlign: "center", color: "red", padding: "20px" }}>
      Error loading product: {error}
    </div>;
  }

  if (loading) return <Loader />;

  if (!product) return <div style={{ textAlign: "center", padding: "20px" }}>No product found</div>;

  return (
    <>
      <h1 style={{ padding: "20px", width: "100%", textAlign: "center" }}>Featured</h1>
      <div className="f-cen p16">
        <Card
        // key={product.id}
          id={product.id}
          discount_rate={product.discount_rate}
          image={product.image}
          name={product.name}
          old_price={product.old_price}
          price={product.price}
        />
      </div>
    </>
  );
}

export default OneProduct;
