import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  // Product details
  const product = {
    id: 1,
    name: "Vicodin",
    description: "Category - Opioids",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1588718889344-f7bd7a565d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Handlers for quantity buttons
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row md:max-w-6xl mx-auto mt-8 mb-28 px-4 md:px-0">
      {/* Product details section */}
      <div className="md:w-2/3 md:pr-8 border-2 rounded-lg p-4 m-4">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="flex">
          <img src={product.image} alt={product.name} className="mb-4 w-44" />
          <p className="mx-3">
            Hydrocodone/paracetamol is the combination of the pain medications
            hydrocodone and paracetamol. It is used to treat moderate to severe
            pain. It is taken by mouth. Recreational use is common in the United
            States. Common side effects include dizziness, sleepiness,
            constipation, and vomiting.
          </p>
        </div>

        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* Order summary section */}
      <div className="md:w-1/3 bg-gray-50 p-4 rounded-md mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center border-b border-gray-400 pb-2">
          <p className="text-gray-700">{product.name}</p>
          <p className="text-gray-700">{product.price}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center">
            <button
              className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
              onClick={handleDecrement}
            >
              <FaMinus />
            </button>
            <p className="text-gray-700 mx-2">{quantity}</p>
            <button
              className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
              onClick={handleIncrement}
            >
              <FaPlus />
            </button>
          </div>
          <p className="text-gray-700">{product.price * quantity}</p>
        </div>
        <button className="bg-[#10847e] text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
