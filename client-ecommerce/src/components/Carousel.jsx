import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "15px"};
right: ${(props) => props.direction === "right" && "15px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Wrapper =styled.div`
height: 100%;
display: flex;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
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
const Descr = styled.p`
margin: 50px 0;
font-size:20px;
font-weight:light;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor: pointer;
`
const Carousel = () => {
  return (
    <Container>
      <Arrow direction="left">
         <ArrowLeftOutlinedIcon/>
      </Arrow>
      <Wrapper>
        <Slide>
         <ImageContainer>
            <Image src="https://cdn.pixabay.com/photo/2017/08/10/08/00/shirt-2619788_1280.jpg"/>
         </ImageContainer>
         <DetailsContainer>
            <Title>SALE</Title>
            <Descr>AMAZING 30% DISCOUNT ON NEW ARRIVALS!</Descr>
            <Button>SHOP NOW</Button>
         </DetailsContainer>
         </Slide>       
      </Wrapper>
      <Arrow  direction="right">
         <ArrowRightOutlinedIcon/>
      </Arrow>
    </Container>
  )
}

export default Carousel
