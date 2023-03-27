import React from "react";
import "./ProductBanner.css";

const ProductBanner = ({ title }) => {
  return (
    <div>
      <div
        className="hero h-80"
        style={{
          backgroundImage: `url("https://i.ibb.co/YQP79q4/All-Products-Group-8ddb74dd88cf5547.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
