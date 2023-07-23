import React from 'react';
import { Link } from 'react-router-dom';

const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
      <h1 className="text-4xl font-bold mb-6">Payment Failed!</h1>
      <p className="text-lg">Your payment process has failed. Please try again</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default Fail;