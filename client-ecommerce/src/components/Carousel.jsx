import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { carouselItems } from '../data';
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
`
const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "15px"};
right: ${(props) => props.direction === "right" && "15px"};
cursor: pointer;
opacity: 0.7;
z-index: 1;
background-color: lightgray;
border-radius: 50%;
margin: auto;
`
const Wrapper =styled.div`
height: 100%;
display: flex;
transform: translateX(${(props) => props.carouselIndex * -100}vw);
transition: all 1.5s ease;
`
const Slide = styled.div`
width: 100vw;
display: flex;
align-items: center;
height: 100vh;
`
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
height: 80%;
`
const DetailsContainer = styled.div`
 flex:1;
 padding:50px;
`
const Title = styled.h1`
  font-size:70px;
`
const Description = styled.p`
margin: 50px 0;
font-size:20px;
font-weight:light;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor: pointer;
&:hover {
  transition: all 0.8s ease;
  background-color: lightpink;
}
`
const Carousel = () => {
const [carouselIndex, setCarouselIndex] =useState(0);
let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/products`; 
    navigate(path);
  }

 const handleClick = (imgDirection) =>{
     if(imgDirection ==="right"){
      setCarouselIndex(carouselIndex <3 ? carouselIndex +1 : 0)
     } else{
      setCarouselIndex(carouselIndex > 0 ? carouselIndex -1 : 3 )
     }
  }
  return (
    <Container>
      <Arrow direction="left" onClick ={() => handleClick("left")}>
         <ArrowLeftOutlinedIcon/>
      </Arrow>
      <Wrapper carouselIndex ={carouselIndex}>
        {carouselItems.map((item) =>(
          <Slide bg={item.bg}>
            {console.log(item.bg)}
          <ImageContainer>
          <Image src= {item.img}/>
          </ImageContainer>
          <DetailsContainer>
          <Title>{item.title}</Title>
          <Description>{item.desc}</Description>
          <Button onClick={routeChange}> SHOP NOW </Button>
          </DetailsContainer>
          </Slide>     
        ))}   
      </Wrapper>
      <Arrow  direction="right" onClick ={() => handleClick("right")}>
         <ArrowRightOutlinedIcon/>
      </Arrow>
    </Container>
  )
}

export default Carousel
