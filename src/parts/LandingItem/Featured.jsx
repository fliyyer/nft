import React from 'react'
import Artis1 from '../../assets/1.png'
import Artis2 from '../../assets/2.png'
import Artis3 from '../../assets/3.png'
import Artis4 from '../../assets/4.png'
import Artis5 from '../../assets/5.png'
import Artis6 from '../../assets/6.png'

const Featured = () => {
    return (
        <div className='my-10 mx-14 p-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white font-semibold text-3xl'>Live Auctions</h1>
                <button className='rounded-xl border-solid border-2 border-blue-500 w-44 h-16 text-white'>Get Started</button>
            </div>
            <div>
                <div className='flex justify-between gap-6 my-14'>
                    <img src={Artis1} alt="" />
                    <img src={Artis2} alt="" />
                    <img src={Artis3} alt="" />
                    <img src={Artis4} alt="" />
                    <img src={Artis5} alt="" />
                    <img src={Artis6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured
