import React from 'react'
import Navbar from '../Navbar/navbar'
import Hero from '../Hero/hero'
import Category from '../Category/category'
import Values from '../Values/values'
import Product from '../Products/product'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Values />
        <Product />
    </div>
  )
}

export default Home