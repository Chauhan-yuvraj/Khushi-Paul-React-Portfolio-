import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='bg-black'>
        <div className='bg-EerieBlack text-TextColor flex justify-center mx-40 rounded-b-xl   '>
            <ul className='flex space-x-32 text-xl py-4  font-IBM'>
                <li className='cursor-pointer hover:font-bold hover:text-2xl ease-in-out duration-200 active:underline'>Home</li>
                <li className='cursor-pointer hover:font-bold hover:text-2xl ease-in-out duration-200 active:underline'>About Me</li>
                <li className='cursor-pointer hover:font-bold hover:text-2xl ease-in-out duration-200 active:underline'>Skills</li>
                <li className='cursor-pointer hover:font-bold hover:text-2xl ease-in-out duration-200 active:underline'>Project</li>
                <li className='cursor-pointer hover:font-bold hover:text-2xl ease-in-out duration-200 active:underline'>Get in Touch</li>
            </ul>
        </div>
    </div>
    </>
    )
}

export default NavBar