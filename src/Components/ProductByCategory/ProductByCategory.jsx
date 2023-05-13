import {React,useEffect,useState} from "react";
import axios from "axios";
import Product from "../Product/Product";

const ProductByCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Create a new array of products with only the first product for each unique category
  const uniqueProducts = Object.values(data.reduce((acc, cur) => {
    if (!acc[cur.category]) {
      acc[cur.category] = cur;
    }
    return acc;
  }, {}));

  return (
    <>
      <div>
        <h1 className="pt-2 text-3xl font-semibold">Products</h1>
        <div className="flex mt-5 justify-center flex-wrap">
          {uniqueProducts.map((item) => (
            <Product
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              discount={item.Discount}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductByCategory;
