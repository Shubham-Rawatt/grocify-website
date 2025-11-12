import React from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiShoppingBag } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
import { TbMenu2 } from 'react-icons/tb'

const Navbar = () => {
  return (
    <header className='fixed top-0 right-0 left-0 z-50'>
        <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between items-center px-10'>
             <a href="#"  className='text-3xl font-semibold'> Gr<span className='text-orange-500 uppercase'>0</span>cify </a>


        <ul className='md:flex items-center gap-x-15 hidden'>
            <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact</a></li>
        </ul>


        <div className='flex items-center gap-x-5'> 
            {/*  search bar */}

            <div className='md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden'>
                <input type="text" placeholder='Search... ' autoComplete='off' className='flex-1 h-[5vh] p-x-3 focus:outline-none'/>
                <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'> < IoSearch /> </button>
            </div>

            <a href="#" className='text-zinc-800 text-2xl'>   < GoHeartFill /></a>
            <a href="#" className='text-zinc-800 text-2xl'>  < HiShoppingBag /></a>

            <a href="#" className='text-zinc-800 text-3xl md:hidden'> < TbMenu2 /> </a>
        
        </div>

        
        {/* <ul className='flex-col gap-y-15 items-center gap-x-15 md:hidden absolute top-30 left-1/2 transform -translate-x-1/2'>
            <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact</a></li>
        </ul> */}


        </nav>
    </header>
  )
}

export default Navbar