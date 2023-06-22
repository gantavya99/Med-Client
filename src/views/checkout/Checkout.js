import React, { useState } from 'react';

const Checkout = ({price}) => {
  

  const handlePayment = async () => {
    const response = await fetch('http://localhost:5656/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price }),
    });

    const { sessionId } = await response.json();

    // Redirect the user to the checkout page
    const stripe = window.Stripe('pk_test_51MNhagSHk6cCnpybxcnVe0oHwpiPaKueLb7Yk7vCg8ngb9hNp40eoTNCQEupFKkr0eRqCC8ZULwzrDTf3mQWDfEE00WnVfEX3n');
    stripe.redirectToCheckout({ sessionId });
  };

  return (
    <div>
      <h1>Stripe Checkout Example</h1>
      
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Checkout;