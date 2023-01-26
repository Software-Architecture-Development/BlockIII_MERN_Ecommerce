import styled from 'styled-components'
import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container =styled.div`
  display:flex;
  padding:20px;
  justify-content:space-between;
`
const ProductCategories = () => {
  return (
    <Container>
      {categories.map((item) =>(
        <CategoryItem  key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default ProductCategories
