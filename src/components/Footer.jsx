import React from 'react'

function Footer() {
  return (
    <footer id='contact' className="mt-20 border-t py-10 border-neutral-700">
         <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-cyan-400">Get</span> in Touch  
          
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your text"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-cyan-400 hover:bg-cyan-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Submit
          </button>
        </div>
      </div>
<p className="text-center text-gray-500 text-base">
        © 2024. All rights reserved by Atinance
      </p>
    </footer>
  )
}

export default Footer