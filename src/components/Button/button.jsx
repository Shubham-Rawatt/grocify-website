import React from 'react'

const Button = ({title}) => {
  return (
    <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lgmd:text-lg text-md hover:scale-105 transition-all duration-300 cursor-pointer'>{title}</button>
  )
}

export default Button