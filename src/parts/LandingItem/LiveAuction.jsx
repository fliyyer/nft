import React from 'react'
import Live1 from '../../assets/Live1.png'
import Live2 from '../../assets/Live2.png'
import Live3 from '../../assets/Live3.png'
import User from '../../assets/user.png'
import Fire from '../../assets/Fire.png'

const LiveAuction = () => {
    return (
        <div className='my-10 mx-14 p-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white font-semibold text-3xl'>Live Auctions</h1>
                <button className='rounded-xl border-solid border-2 border-blue-500 w-44 h-16 text-white'>Get Started</button>
            </div>
            <div className='flex justify-between gap-10 mt-14'>
                <div className='bg-gray-900 w-96 h-auto p-8 rounded-3xl'>
                    <img src={Live1} alt="" />
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-white font-semibold'>Dao Vinci #0000</h1>
                        <p className='text-gray-500'>Current Bid</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3 my-3'>
                            <img src={User} alt="" />
                            <p className='text-white text-sm'>@Yoga Ulil</p>
                        </div>
                        <h1 className='text-white font-bold'>4.89 eTH</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src={Fire} alt="" />
                            <h1 className='text-white font-bold text-center'>05 : 12 : 07 : 26</h1>
                        </div>
                        <button className='rounded-2xl bg-blue-700 w-32 h-12 text-white'>Bid</button>
                    </div>
                </div>
                <div className='bg-gray-900 w-96 h-auto p-8 rounded-3xl'>
                    <img src={Live2} alt="" />
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-white font-semibold'>Fangster 8668</h1>
                        <p className='text-gray-500'>Current Bid</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3 my-3'>
                            <img src={User} alt="" />
                            <p className='text-white text-sm'>@Rahmat Hidayat</p>
                        </div>
                        <h1 className='text-white font-bold'>4.89 eTH</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src={Fire} alt="" />
                            <h1 className='text-white font-bold text-center'>05 : 12 : 07 : 26</h1>
                        </div>
                        <button className='rounded-2xl bg-blue-700 w-32 h-12 text-white'>Bid</button>
                    </div>
                </div>
                <div className='bg-gray-900 w-96 h-auto p-8 rounded-3xl'>
                    <img src={Live3} alt="" />
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-white font-semibold'>Sherbet 3062</h1>
                        <p className='text-gray-500'>Current Bid</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3 my-3'>
                            <img src={User} alt="" />
                            <p className='text-white text-sm'>@Purnomo</p>
                        </div>
                        <h1 className='text-white font-bold'>4.89 eTH</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src={Fire} alt="" />
                            <h1 className='text-white font-bold text-center'>05 : 12 : 07 : 26</h1>
                        </div>
                        <button className='rounded-2xl bg-blue-700 w-32 h-12 text-white'>Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveAuction
