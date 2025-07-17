
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.slice(0, 8).map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
