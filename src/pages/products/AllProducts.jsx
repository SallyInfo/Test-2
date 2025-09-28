import AllProduct from "./components/AllProduct";
import { useEffect,useState } from "react";
import { getAllProducts } from "./../../services/foodService"
import Loader from "../../components/custom/Loader";


function AllProducts() {
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
    return <Loader />;
  }
  return (
    <>
    <h1  style={{padding:"20px ",width :"100%", textAlign:"center"}}>Featured</h1>
    <div className="f-cen p16">
          {
          product.map((product, index) => (
            <AllProduct
            key={product.id || index}
            id={product.id}
            discount_rate={product.discount_rate}
            image={product.image}
            name={product.name}
            old_price={product.old_price}
            price={product.price}
            />
          ))}
    </div>
    </>
  )
}

export default AllProducts;
