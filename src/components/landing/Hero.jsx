import React from 'react'
import { Link } from 'react-router-dom';
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';


function Hero() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Atinance Expense Tracker
        <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">
        {" "}
          for everyone
        </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
Atinance, a web app for expense tracking.  Take control of your finances, gain insights and simplify your financial life. Get started today!
        </p>
        <div className="flex justify-center my-10">
            

        <Link to="/registration"  className="bg-gradient-to-r from-cyan-500 to-cyan-800 py-3 px-4 mx-3 rounded-md" >Start for free </Link>
        
        <Link to="/dashboard" className="py-3 px-4 mx-3 rounded-md border">
          Dashboard
        </Link>
        
</div>
<div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-cyan-700 shadow-sm shadow-cyan-400 mx-2 my-4"
        >
             <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
            </video>
            <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-cyan-700 shadow-sm shadow-cyan-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
            </div>
    </div>
  )
}

export default Hero;