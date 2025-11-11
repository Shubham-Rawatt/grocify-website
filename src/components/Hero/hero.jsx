import React from 'react'
import Button from '../Button/button'
import grocery_img  from '../../assets/images/grocery.png'


const Hero = () => {
  return (
    <section>
        <div className='max-w-[1400px]  min-h-screen mx-auto px-10 flex items-center pt-25'>
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality</span>
                <h1 className='text-7xl/20 mt-5 font-bold '>Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange'>Veggies</span> <br/>  In Your City</h1>
                <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-10'> Bred for a high content of beneficial substances orr products are all fresh and healthy</p>
                <Button title="Shop Now"/>
            </div>

            <div className='flex-1'>
                <img src={grocery_img} alt="grocery image" />

            </div>
        </div>
    </section>
  )
}

export default Hero