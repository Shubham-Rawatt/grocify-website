import React from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiShoppingBag } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'

const Navbar = () => {
  return (
    <header className='fixed top-0 right-0 left-0'>
        <nav className='max-w-[1400px] mx-auto h-[14vh] flex justify-between items-center px-10'>
             <a href="#"  className='text-3xl font-semibold'> Gr<span className='text-orange-500 uppercase'>0</span>cify </a>


        <ul className='flex items-center gap-x-15'>
            <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact</a></li>
        </ul>


        <div className='flex items-center gap-x-5'> 
            {/*  search bar */}

            <div className='flex items-center p-1 border-2 border-orange-500 rounded-full'>
                <input type="text" placeholder='Search... ' autoComplete='off' className='flex-1 h-[5vh] p-x-3 focus:outline-none'/>
                <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'> < IoSearch /> </button>
            </div>

            <a href="#" className='text-zinc-800 text-2xl'>   < GoHeartFill /></a>
            <a href="#" className='text-zinc-800 text-2xl'>  < HiShoppingBag /></a>
        </div>


        </nav>
    </header>
  )
}

export default Navbar