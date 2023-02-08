import React from 'react'
import Offers from '../components/Offers'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ProductCategories from '../components/ProductCategories'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Offers/>
      <Navbar/>
      <Carousel/>
      <ProductCategories/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
