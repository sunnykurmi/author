import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full p-5 px-32 backdrop-blur-sm'>
        <div>
            <h1 className='text-xl font-bold text-zinc-50'>Author Center</h1>
        </div>
        <div className='flex gap-10'>
            <a href="" className='font-medium text-zinc-50'>Home</a>
            <a href="" className='font-medium text-zinc-50'>Marketplace</a>
            <a href="" className='font-medium text-zinc-50'>About Us</a>
            <a href="" className='font-medium text-zinc-50'>Contact  Us</a>
        </div>
        <div className='flex gap-2'>
            <button className='px-3 py-1 bg-[#4F6D7A] rounded-lg font-medium text-zinc-50'>Login</button>
            <button className='px-3 py-1 bg-[#F2CB9E] rounded-lg font-medium text-red-700'>Signup</button>
        </div>
    </div>
  )
}

export default Navbar