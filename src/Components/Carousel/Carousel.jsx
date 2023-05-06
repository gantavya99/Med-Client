import React from "react";
import Product from "../Product/Product";
import data from "../../Data/Data.json";
import data1 from "../../Data/NewData.json";
const Carousel = () => {
  return (
    <>
    <div>
      <h1 className="pt-2 text-3xl font-semibold">Products</h1>
      <div className="flex mt-5 justify-center flex-wrap">
        {data.map((item) => (
          <Product
            imageUrl={item.image}
            title={item.drug}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
    <div className="flex justify-center items-center space-x-4 bg-[#f8f7fe] rounded-xl p-10 m-4">
  <div className="border-r pr-4">
    <p className="text-lg font-semibold">Express Delivery</p>
  </div>
  <div className="border-r pr-4">
    <p className="text-lg font-semibold">24*7 Support</p>
  </div>
  <div>
    <p className="text-lg font-semibold">Certified Medications</p>
  </div>
</div>

    <div>
      <h1 className="pt-2  text-3xl font-semibold">New Launches</h1>
      <div className="flex mt-5 justify-center flex-wrap">
        {data1.map((item) => (
          <Product
            imageUrl={item.image}
            title={item.drug}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Carousel;
