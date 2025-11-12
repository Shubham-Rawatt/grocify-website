import React from 'react'
import Navbar from '../Navbar/navbar'
import Hero from '../Hero/hero'
import Category from '../Category/category'
import Values from '../Values/values'
import Product from '../Products/product'
import Discount from '../Discount/discount'
import Testimonials from '../Testimonials/testimonials'
import Footer from '../Footer/footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Values />
        <Product />
        <Discount />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home