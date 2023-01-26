import React from 'react'
import styled from 'styled-components'

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
`

const CategoryItem = ({item}) => {
  return (
    <Container key={item.id}>
      {console.log(item, item.img)}
      <Image src={item.img}/>
      <Details>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>

      </Details>
    </Container>
  )
}

export default CategoryItem
