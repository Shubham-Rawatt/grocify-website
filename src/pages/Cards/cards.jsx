import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../../components/Button/button'

const Cards = ({img ,title, rate}) => {
  return (
    <div className='bg-zinc-200 p-5'>
        <div className='flex justify-between'>
            <span className='text-3xl text-zinc-300 '> <FaHeart /> </span>
            <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg'> <FaPlus /> </button>
        </div>

        <div className='w-full h-50 '> <img src={img} alt="image list" /></div>

    <div className='text-center'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>{rate}</p>
        <Button  title='Shop Now'/>
    </div>













        
    </div>
  )
}

export default Cards