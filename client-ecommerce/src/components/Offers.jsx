import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container =styled.div`
   height:30px;
   background-color: #8A2BE2;
   color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:14px;
   font-weight:bold;
   ${mobile({ width: "100vw" })}
`

const Offers = () => {
  return (
    <Container>
      Awesome Deal! Free delivery on Orders Above 40$.
    </Container>
  )
}

export default Offers
