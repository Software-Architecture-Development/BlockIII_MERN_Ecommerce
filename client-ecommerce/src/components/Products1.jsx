import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from "styled-components";
import { trendingProducts } from "../data";
import Product1 from "./Product1";
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products1 = ({cat,filters,sort}) => {
  // console.log(cat,filters,sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts()
  },[cat]);


  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value])=>
       item[key].includes(value)
      ))
    )
  },[products,cat,filters]);
  
  useEffect(()=>{
    if((sort === "newest")){
      setFilteredProducts((prev)=>
       [...prev].sort((a,b) => a.createAt - b.createAt)
      );
    } else if((sort === "asc")){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.price - b.price)
       );
    } else {
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => b.price - a.price)
       );
    }
  },[sort]);

  return (
    <Container>
      {trendingProducts.map((item) => (
        <Product1 item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products1;