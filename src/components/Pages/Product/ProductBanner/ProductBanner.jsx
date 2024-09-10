import React from 'react';
import './ProductBanner.css';

const ProductBanner = ({ title }) => {
  return (
    <div>
      <div
        class='hero h-80'
        style={{
          backgroundImage: `url("https://i.ibb.co/YQP79q4/All-Products-Group-8ddb74dd88cf5547.png")`,
        }}
      >
        <div class='hero-overlay bg-opacity-60'></div>
        <div class='hero-content text-center text-neutral-content'>
          <div class='max-w-md'>
            <h1 class='mb-5 text-5xl font-bold'>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
