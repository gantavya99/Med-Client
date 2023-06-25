import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const PayButton = ({ cartItems }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true); // Set loading state to true

    axios
      .post(`https://med-server-production.up.railway.app/create-checkout-session`, {
        cartItems: cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          // Redirect to the provided URL
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false); // Set loading state to false after the request is complete
      });

    console.log(cartItems);
  };

  return (
    <div>
      <button onClick={() => handleCheckout()} disabled={isLoading}>
        {isLoading ? <ClipLoader
        color={'#ffffff'} loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : 'Check Out'}
      </button>
    </div>
  );
};

export default PayButton;


// import React, { useState, useEffect } from "react";
// import "./App.css";

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Stubborn Attachments</h3>
//       <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }