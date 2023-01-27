import React from 'react'
import styled from 'styled-components'
import { trendingProducts } from '../data'
import Product from './Product'

const Container = styled.div`
padding:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`
const Products = () => {
  return (
    <Container>
      {trendingProducts.map((item) =>(
        <Product item ={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
