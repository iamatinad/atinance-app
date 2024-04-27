import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from '../components/landing/Footer';
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userDetails = {
      email,
      password
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_ATINANCE_API_URL}/api/users/login`, {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // Handle response 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen py-40"
        style={{backgroundImage : "linear-gradient(115deg, #3E9DC8, #BCBEC0)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXhwZW5zZSUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D')" }}
            ></div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <span>
                    {" "}
                    <a href="#" className="text-cyan-500 font-semibold">
                      Forgot your Password?
                    </a>{" "}
                    &{" "}
                  </span>
                </div>
                <div className="mt-5">
                  <Link to='/dashboard'>
                  <button className="w-full bg-cyan-500 py-3 text-center text-white">
                    Login 
                  </button>
                  </Link>
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

export default Login;
