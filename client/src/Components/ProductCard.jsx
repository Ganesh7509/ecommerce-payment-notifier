import React from 'react';
import { useAuth } from '../context/AuthContext';
import { loadStripe } from '@stripe/stripe-js';

// ✅ Replace with your real Stripe publishable key
const stripePromise = loadStripe('pk_test_51RltNARlhBME4fWKMyv5z5mTJ57oCpMwZL4dJGBJ6iDHGya8A6NAMTzNcRhpKzVpseHJmsLnM0S6C6OxRiBu5zaS00b2hyBDiM');

const ProductCard = ({ product }) => {
  const { user, login } = useAuth();

  if (!product) return <p>Product data not available</p>;

  const handleBuy = async () => {
    if (!user) {
      alert('Please login to buy this product');
      login();
      return;
    }

    try {
      const stripe = await stripePromise;

      // ✅ Send only required fields expected by backend
      const productData = {
        name: product.title || product.product,
        price: product.price
      };

      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: product,user }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', width: '200px' }}>
      <img
        src={product.image}
        alt={product.title || product.product}
        style={{ width: '100%' }}
      />
      <h3>{product.title || product.product}</h3>
      <p>{product.author || product.company}</p>
      <p>₹{product.price}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default ProductCard;
