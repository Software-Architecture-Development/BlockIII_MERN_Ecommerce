import React from "react";
import { trendingProducts } from "../data";
import { Link } from "react-router-dom";
import {
    Nav
   } from "react-bootstrap";

const MonProducts = () => {
  const products = trendingProducts.map(product => {
    return (
      <div key={product.id}>
        <img src={product.img} />
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default MonProducts;