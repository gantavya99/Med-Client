import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../store/CartSlice";
import StripeCheckout from "react-stripe-checkout";
import { Link, useNavigate } from "react-router-dom";
import PayButton from "./PayButton";
import Checkout from "../checkout/Checkout";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [coinbaseData,setCoinbaseData]=useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickCoinbase = async () => {
    try {
      const response = await axios.post('https://med-server-production.up.railway.app/api/coinbase/checkout', {
        amount: cart.cartTotalAmount, // Replace with the actual amount
      });
      const data = response.data;
      console.log(data.charge.hosted_url);
      window.location.href=data.charge.hosted_url;
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h3>Shopping Cart</h3>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} />
                    <div>
                      <h3 className="text-lg text-xl font-extrabold">
                        {cartItem.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {cartItem.category}
                      </p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div> 
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              {/* <Checkout price={cart.cartTotalAmount} /> */}
              {/* {console.log(cart.cartItems)} */}
                
              {/* <div>
                <a
                  class="buy-with-crypto"
                  href="https://commerce.coinbase.com/checkout/771fa0d9-586f-4c49-a954-5ecd104e381a"
                >
                  <button className="mt-4 hover:opacity-75">
                  Buy with Crypto
                  </button>
                  
                </a>
              </div> */}
              <div>
                <button onClick={()=>handleClickCoinbase()}>
                  Checkout with Crypto
                </button>
                </div>
              <p>
                Payment method other than crypto? Contact our live chat for more info!
              </p>

              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
