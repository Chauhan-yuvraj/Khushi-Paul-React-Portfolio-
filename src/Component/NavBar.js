import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <div className='bg-black'>
        <div className='bg-EerieBlack text-TextColor flex justify-center mx-40 rounded-b-xl   '>
            <ul className='flex space-x-32 text-xl py-4  font-IBM'>
                <li className='cursor-pointer hover:font-bold hover:text-xl ease-in-out duration-200 active:underline'>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li className='cursor-pointer hover:font-bold hover:text-xl ease-in-out duration-200 active:underline'>
                <NavLink to="/AboutMe">About Me</NavLink>
                    </li>

                <li className='cursor-pointer hover:font-bold hover:text-xl ease-in-out duration-200 active:underline'>
                <NavLink to="/Skill">Skills</NavLink>
                    </li>


                <li className='cursor-pointer hover:font-bold hover:text-xl ease-in-out duration-200 active:underline'>Project</li>

                <li className='cursor-pointer hover:font-bold hover:text-xl ease-in-out duration-200 active:underline'>
                    <NavLink to="/GetIntouch">Get In Touch  </NavLink>
                </li>
            </ul>
        </div>
    </div>
    {/* <HeroSection/> */}
    {/* <GetInTouch/> */}
    </>
    )
}

export default NavBar