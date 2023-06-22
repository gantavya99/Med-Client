import React from 'react';

const Checkout = ({price}) => {
  

  const handlePayment = async () => {
    const response = await fetch('https://med-server-production.up.railway.app/create-checkout-session', {
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
      <button onClick={handlePayment}>Checkout</button>
    </div>
  );
};

export default Checkout;