import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Featured from '../parts/LandingItem/Featured'
import Hero from '../parts/LandingItem/Hero'
import Hot from '../parts/LandingItem/Hot'
import Join from '../parts/LandingItem/Join'
import LiveAuction from '../parts/LandingItem/LiveAuction'
import Services from '../parts/LandingItem/Services'

const LandingPage = () => {
    return (
        <div className='bg-gradient-to-b from-bgcolor to-gray-900 bg-gradient-to-r'>
            <Navbar />
            <Hero />
            <Services />
            <LiveAuction />
            <Featured />
            <Hot />
            <Join />
            <Footer />
        </div>
    )
}

export default LandingPage
