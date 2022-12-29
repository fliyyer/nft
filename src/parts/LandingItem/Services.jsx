import React from 'react'
import Icon from '../../assets/Icon Placeholder.png'

const Services = () => {
    return (
        <div className='flex-row my-10 mx-14 p-10'>
            <h1 className='text-white font-bold text-4xl text-center'>Create and sell your <br /> NFTs</h1>
            <div>
                <div className='flex justify-between gap-8 my-10'>
                    <div className='rounded-xl bg-gray-900 w-96 h-80 p-8'>
                        <img className='mx-auto' src={Icon} alt="" />
                        <h2 className='text-white text-center text-xl font-semibold my-7'>Set up your wallet</h2>
                        <p className='text-gray-500 text-center'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                    </div>
                    <div className='rounded-xl border-solid border-2 border-gray-200 w-96 h-80 p-8'>
                        <img className='mx-auto' src={Icon} alt="" />
                        <h2 className='text-white text-center text-xl font-semibold my-7'>Add your NFTs</h2>
                        <p className='text-gray-500 text-center'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                    </div>
                    <div className='rounded-xl bg-gray-900 w-96 h-80 p-8'>
                        <img className='mx-auto' src={Icon} alt="" />
                        <h2 className='text-white text-center text-xl font-semibold my-7'>List them for sale</h2>
                        <p className='text-gray-500 text-center'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
