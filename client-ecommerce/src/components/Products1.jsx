import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from "styled-components";
import { trendingProducts } from "../data";
import Product1 from "./Product1";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SearchContainer = styled.div`
  border: 0.6px solid lightgray;
  margin: auto;
  width:20%;
  padding: 4px;
  margin-top: 5px
`;

const Input = styled.input`
  // border: none;
  border-width: 0px;
  width:90%;
`;

const Products1 = ({cat,filters,sort}) => {

  const [filter, setFilter] = useState("")

   const searchText =(e) =>{
    setFilter(e.target.value)
   }


   let dataSearch = trendingProducts.filter(item =>{
      return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

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
    <>
    <SearchContainer>
      <Input placeholder="Search" type="text" value={filter} onChange={searchText.bind(this)}/>
        <SearchIcon style={{ color: "gray", fontSize: 15 }} />
    </SearchContainer>
    <Container>
      {dataSearch.map((item) => (
        <Product1 item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Products1;