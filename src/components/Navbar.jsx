import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-6 mx-20'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <ul className='flex gap-4 text-white cursor-pointer text-base'>
                    <li className='hover:opacity-50'>Home</li>
                    <li className='hover:opacity-50'>Discover</li>
                    <li className='hover:opacity-50'>Docs</li>
                    <li className='hover:opacity-50'>Blog</li>
                    <li className='hover:opacity-50'>About Us</li>
                    <li className='hover:opacity-50'>Contact US</li>
                </ul>
            </div>
            <div>
                <button className='text-white rounded-2xl w-44 border-solid border-2 border-blue-800 h-14 font-semibold hover:opacity-50'>Connect Wallet</button>
            </div>
        </nav>
    )
}

export default Navbar
