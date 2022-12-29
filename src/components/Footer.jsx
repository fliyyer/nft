import React from 'react'
import Logo from '../assets/Logo.png'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='mt-10 mx-14 p-10'>
            <div className='flex justify-between'>
                <div className='flex-row w-96 h-48'>
                    <img src={Logo} alt="" />
                    <p className='text-gray-500 text-justify my-10 mb-16'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    <p className='text-white font-medium'>© 2023 Fliyyer</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Resources</h1>
                    <ul className='text-gray-500 mt-10'>
                        <li>Help Center</li>
                        <li className='mt-2'>Platform Status</li>
                        <li className='mt-2'>Partners</li>
                        <li className='mt-2'>Gas-Free Marketplace</li>
                        <li className='mt-2'>Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Company</h1>
                    <ul className='text-gray-500 mt-10'>
                        <li>Our Team</li>
                        <li className='mt-2'>About Us</li>
                        <li className='mt-2'>Contact Us</li>
                        <li className='mt-2'>Career</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Contact</h1>
                    <ul className='text-gray-500 mt-10'>
                        <li className='mt-2'>2715 Ash Dr. San Jose</li>
                        <li className='mt-2'> South Dakota 83475</li>
                        <li className='mt-2 flex gap-4 text-3xl'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
