import { useState } from "react";
import React from "react";
import { FaHospitalUser } from "react-icons/fa6";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


const Login = () => {
  function routing() {
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>;
  }

  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }

  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="absolute lg:top-[-10rem] top-0 w-[60vw]  left-80  pl-10 m-10">
      <div className=" bg-[#494D7D] h-[90vh] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row  justify-center items-center ">
          <div className="text-center lg:m-[10rem] pb-5 ">
            <h1 className="text-5xl font-bold text-white pt-5 underline">Log In</h1>

          <p className="m-10 text-white">Login karlo beta</p>

          </div>
          <div className="flex justify-center -mt-36">
          <div className=" w-[30rem] rounded-2xl shadow-2xl bg-[#ffffff] ">
            <form className="p-4">
              <div className="p-4 flex flex-col">
                <label htmlFor="Email">
                  <span className=" p-2  text-[#41518B]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-[#fff3f3] h-[3rem] rounded-xl pl-4 mt-2"
                />
              </div>

              <div className="p-4 flex flex-col">
                <label htmlFor="password">
                  <span className=" p-2  text-[#41518B]">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your Password"
                  className="bg-[#fff3f3] h-[3rem] rounded-xl pl-4 mt-2"
                />
                <div className="flex items-center m-2 opacity-60">
                  <input type="radio" checked={showPassword} onClick={handleClick}/>
                <span className="p-2 text-[12px] text-[#41518B] font-semibold">Show Password</span>
                </div>
              </div>

              <hr className="" />
              <div className="flex justify-center pb-2 pt-5">
              <button
                className=" w-64  h-[3rem] rounded-xl hover:bg-[#e7e7e7] border-none bg-[#ffeaea] text-[#41518B]"
                onClick={(routing = {})}
              >
                Create a New Account
              </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
