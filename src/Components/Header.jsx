import React from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {
    return (
        <div className="flex lg:flex-row justify-between">
            <div className=' flex items-centre justify-center gap-4' >
                <img className='lg:size-300' src="./assets/Logo.svg" alt="Loading" />
                <button className="  lg:w-20 lg:h-20 bg-gradient-to-r from-orange-400  to-red-400 text-white px-2.5 py-1.5  rounded-2xl">Hosterr is Hiring!</button>
            </div>
            <ul className='hidden lg:flex justify-between items-centre gap-6 font-lato text-gray-400'>
                <li><a href=" #">Plans</a></li>
                <li><a href=" #">Find Domain</a></li>
                <li><a href=" #">Why Hosterr</a></li>
            </ul>
            <div className=' hidden lg:flex justify-between items-center font-lato gap-6'>
                <a className =" text-gray-400 "href="#">Sign In</a>
                <button className='rounded md px-4 py-3 bg-blue-400 hover: text-yellow-300'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars className='size-7' />
            </div>
        </div>
    )
}

export default Header
