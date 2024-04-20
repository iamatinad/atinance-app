import React from 'react'
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Footer from '../components/landing/Footer';


function Home() {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx=auto pt-20 px-6'>
    <Hero/>
    <Features/>
    <Footer/>
    </div>
   
    </>
  )
}

export default Home;