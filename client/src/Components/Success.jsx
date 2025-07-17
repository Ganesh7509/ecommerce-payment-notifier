import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const productName = query.get('product');
    const userName = query.get('user');

    if (productName && userName) {
      fetch('http://localhost:4242/payment-success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productName, userName }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('✅ Admin Notified:', data.message);
        })
        .catch((err) => {
          console.error('❌ Error notifying admin:', err.message);
        });
    }
  }, [location]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default Success;
