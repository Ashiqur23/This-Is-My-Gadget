import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utils/fakeDb";

const Shop = () => {
  const productData = useLoaderData();

  //   cart btn handler
  const handleAddToCart = (id) => {
    addToDb(id)
  };

  console.log(productData);
  return (
    <div className="product-container">
      {productData.map((product, index) => (
        <ProductCard
          product={product}
          handleAddToCart={handleAddToCart}
          key={product.id}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
