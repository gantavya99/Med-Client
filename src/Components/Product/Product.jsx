import { React, useState } from "react";
import Category from "../Category/Category";

const Product = ({ imageUrl, title, description, price,discount,category }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="w-52 m-7 bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <img
        className="w-full h-36 object-cover border-b border-gray-200 hover:opacity-90 transition-opacity"
        src={imageUrl}
        alt={description}
      />
      <div className="p-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-xs float-right text-gray-400">({category})</p>
        <div className="flex mt-2">
          <div>
            <p className="font-medium text-2xl">${price}</p>
          </div>
          <div className="text-[#f47779] mt-2 ml-2 text-sm">{discount}%</div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className=" text-sm bg-[#10847e] text-white py-2 px-4 rounded hover:bg-[#1c706c] transition duration-300 ease-in-out">
            Add to Cart
          </button>
          <div className="flex items-center border rounded">
            <button
              onClick={handleDecrement}
              className="px-1 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              -
            </button>
            <span className="px-1 text-sm">{counter}</span>
            <button
              onClick={handleIncrement}
              className="px-1 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
