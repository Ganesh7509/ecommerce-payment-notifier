
import React from 'react';
import { mobileData } from '../Data/mobiles';
import { watchData } from '../Data/watch';
import { tvData } from '../Data/tv';
import { menData } from '../Data/men';
import { womanData } from '../Data/woman';
import { computerData } from '../Data/computers';

import ProductList from './ProductList';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div id="mobiles">
        <h2>Mobiles</h2>
        <ProductList products={mobileData.slice(0, 11)} />
      </div>

      <div id="watch">
        <h2>Watches</h2>
        <ProductList products={watchData.slice(0, 11)} />
      </div>

      <div id="tv">
        <h2>TVs</h2>
        <ProductList products={tvData.slice(0, 11)} />
      </div>

      <div id="men">
        <h2>Men</h2>
        <ProductList products={menData.slice(0, 11)} />
      </div>

      <div id="women">
        <h2>Women</h2>
        <ProductList products={womanData.slice(0, 11)} />
      </div>

      <div id="computers">
        <h2>Computers</h2>
        <ProductList products={computerData.slice(0, 11)} />
      </div>
    </div>
  );
};

export default Home;
