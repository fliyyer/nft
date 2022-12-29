import React from 'react'
import Hero1 from '../../assets/Hero1.png'
import Hero2 from '../../assets/Hero2.png'
import Hero3 from '../../assets/Hero3.png'
import Binance from '../../assets/Binance.png'
import Tw from '../../assets/Tw.png'
import Tko from '../../assets/Tko.png'
import Metamask from '../../assets/Metamask.png'
import Coinbase from '../../assets/Coinbase.png'

const Hero = () => {
    return (
        <div className='mx-20 my-10 p-8'>
            <div className='flex gap-9'>
                <h1 className='text-white font-bold text-5xl w-1/2'>Discover a New Era of Crypto Currency</h1>
                <div className='flex-row w-1/2 '>
                    <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='text-white mt-6 border-b-2 border-solid border-white'>Get Started </button>
                </div>
            </div>
            <div className='flex justify-between gap-6 my-10'>
                <div>
                    <img className='rounded-3xl' src={Hero1} alt="" />
                </div>
                <div>
                    <img className='rounded-3xl' src={Hero2} alt="" />
                </div>
                <div>
                    <img className='rounded-3xl' src={Hero3} alt="" />
                </div>

            </div>
            <div className='flex justify-between items-center mt-24'>
                <div>
                    <img src={Binance} alt="" />
                </div>
                <div>
                    <img src={Tw} alt="" />
                </div>
                <div>
                    <img src={Metamask} alt="" />
                </div>
                <div>
                    <img src={Coinbase} alt="" />
                </div>
                <div>
                    <img src={Tko} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
