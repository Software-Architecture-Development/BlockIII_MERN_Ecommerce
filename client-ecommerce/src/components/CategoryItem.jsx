import React from 'react'
import styled from 'styled-components'
import {
  Nav
 } from "react-bootstrap";
 import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container =styled.div`
  flex:1;
  height:60vh;
  margin:2px;
  position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Details = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title = styled.h2`
color:white;
margin-bottom:10px;
`
const Button = styled.button`
   background-color: white;
   padding:10px;
   border:none;
   cursor:pointer;
   opacity:0.8;
   font-weight: bold;
   &:hover {
    transition: all 0.8s ease;
    background-color: brown;
    transform: scale(1.1);
  }
`

const CategoryItem = ({item}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/products`; 
    navigate(path);
  }
  return (
    <Container key={item.id}>
      {console.log(item, item.img, item.cat)}
      {/* <Link to={`/productlist/`}> */}
      <Nav.Link href={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Details>
      <Title>{item.title}</Title>
      <Button onClick={routeChange}> SHOP NOW </Button>
      </Details>
      {/* </Link> */}
      </Nav.Link>
    </Container>
  )
}

export default CategoryItem
