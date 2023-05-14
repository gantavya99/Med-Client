import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "../../"
const ProductByCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}


  // Create a new array of products with only the first product for each unique category
  const uniqueProducts = Object.values(
    data.reduce((acc, cur) => {
      if (!acc[cur.category]) {
        acc[cur.category] = cur;
      }
      return acc;
    }, {})
  );

  return (
    <>
      <div className="relative">
        <h1 className="pt-2 text-3xl font-semibold">Products</h1>
        <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
        <div id="content" className="carousel flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
        <div className="flex mt-5 justify-center">
          
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
        
      </div>
    </>
  );
};

export default ProductByCategory;
