import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20'>

        <div className='flex flex-wrap max-w-[1400px] gap-y-12 mx-auto px-10'>
            <div className='flex-1 basis-[300px]'>
                <a href="#"  className='text-3xl font-semibold'> Gr<span className='text-orange-500 uppercase'>0</span>cify </a>
                <p className='text-zinc-600 mt-6 max-w-[350px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sapiente maiores delectus veritatis architecto beatae nulla est quidem? Sunt eum dolor inventore, recusandae voluptatibus minus est neque laboriosam error esse</p>
                <p className='text-zinc-800 mt-6 font-semibold'>2025 &copy; All Rights Reserved</p>
            </div>

        <ul className='flex-1'>
            <li><h5 className='text-zinc-800 text-2xl font-bold'>Company</h5></li>
            <li className='mt-6'> <a href="#" className='hover:text-orange-400 text-zinc-800'>About</a></li>
            <li className='mt-6'> <a href="#" className='hover:text-orange-400 text-zinc-800'>FAQ</a></li>
        </ul>

         <ul className='flex-1'>
            <li><h5 className='text-zinc-800 text-2xl font-bold'>Support</h5></li>
            <li className='mt-6'> <a href="#" className='hover:text-orange-400 text-zinc-800'>Support center</a></li>
            <li className='mt-6'> <a href="#" className='hover:text-orange-400 text-zinc-800'>Feedback</a></li>
            <li className='mt-6'> <a href="#" className='hover:text-orange-400 text-zinc-800'>Contact us</a></li>
        </ul>

        <div className='flex-1'>
            <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
            <p className='mt-6 text-zinc-600'>Questions or Feedback ? <br/> We'd lover to hear from you</p>
                
                <div className='flex p-1 mt-6 bg-white'>
                    <input className='h-[5vh] pl-4 flex-1 focus:outline-none' type="email" name="email" autoComplete='off' placeholder='Enter Email Address'/>
                    <button className='bg-linear-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'><IoIosArrowForward /> </button>
                </div>

        </div>
     </div>
    </footer>
  )
}

export default Footer