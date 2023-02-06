import React from 'react'
import Offers from '../components/Offers'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ProductCategories from '../components/ProductCategories'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Products1 from '../components/Products1'

const Home = () => {
  return (
    <div>
      <Offers/>
      <Navbar/>
      <Carousel/>
      <ProductCategories/>
      {/* <Products/> */}
      <Products1/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
