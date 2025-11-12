import React from 'react'
import Navbar from '../Navbar/navbar'
import Hero from '../Hero/hero'
import Category from '../Category/category'
import Values from '../Values/values'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Values />
    </div>
  )
}

export default Home