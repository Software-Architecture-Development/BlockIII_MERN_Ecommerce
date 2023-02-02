import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";

const Details =styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.10s ease;
  cursor: pointer;
`
const Container = styled.div`
flex: 1;
  margin: 5px;
  background-color: #f5fbfd;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 270px;
  height: 310px;
  justify-content: center;
  &:hover ${Details}{
    opacity: 1;
    transform: scale(0.9);
  }
`
const Image =styled.img`
 background-color:transparent;
 height: 70%;
 z-index: 2;
`

const Icon =styled.div`
width: 40px;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
border-radius: 50%;
background-color: white;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.2);
}
`

const Product = ({item}) => {
  return (
    <Container>
      <Image src= {item.img}/>
      <Details>
        <Icon>
         <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
         <Link to={`/product/${item._id}`}>
         <SearchOutlinedIcon/>
         </Link>

        </Icon>
        <Icon>
         <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Details>
    </Container>
  )
}

export default Product
