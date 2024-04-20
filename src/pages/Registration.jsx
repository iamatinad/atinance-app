import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from '../components/landing/Footer';


function Registration() {
  return (
    <>
    <Navbar/>
    <div
      className="min-h-screen py-40"
      style={{backgroundImage : "linear-gradient(115deg, #3E9DC8, #BCBEC0)" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1709534486708-fb8f94150d0a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
          >
          
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 text-cyan-500">Register</h2>
            <p className="mb-4 text-cyan-500">
              Create your account. It’s free and only takes a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  {" "}
                  <a href="#" className="text-cyan-500 font-semibold">
                    I Accept Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-cyan-500 font-semibold">
                    Sign In Here
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-cyan-500 py-3 text-center text-white">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
}

export default Registration;
