import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { trendingProducts } from '../data'
import ProductStyle from './ProductStyle'
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer'

const Container = styled.div`
padding:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`
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
const Products = () => {
  const [filter, setFilter] =useState("")

   const searchText =(e) =>{
    setFilter(e.target.value)
   }


   let dataSearch = trendingProducts.filter(item =>{
      return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

  return (
    <>
    <SearchContainer>
      <Input placeholder="Search" type="text" value={filter} onChange={searchText.bind(this)}/>
        <SearchIcon style={{ color: "gray", fontSize: 15 }} />
    </SearchContainer>
    <Container>
        {dataSearch.map((item) =>(
          <ProductStyle item ={item} key={item.id}/>)) 
      }   
    </Container>
    <Footer/>
    </>
  )
}

export default Products
