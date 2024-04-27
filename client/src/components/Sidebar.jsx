import React from "react";
import pfp from "../assets/3.png";
import { Link,Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { IoMdLogIn } from "react-icons/io";



const navData = [
  {
    title: (
      <div className="flex justify-start items-center w-[8rem]">
        <IoIosHome className="mr-3 w-8" /> Home
      </div>
    ),
    path: "/", 
  },
  {
    title: (
      <div className="flex justify-start items-center w-[8rem]">
        <FaHeart className="mr-3 w-8" />
        Favourite
      </div>
    ),
    path: "/about", 
  },
  {
    title: (
      <div className="flex justify-start items-center w-[8rem]">
        <SiNike className="mr-3 w-8" />
        Completed
      </div>
    ),
    path: "/contact",
  },
  {
    title: (
      <div className="flex justify-start items-center w-[8rem]">
        <IoMdLogIn className="mr-3 w-7" />
        Login
      </div>
    ),
    path: "/login", 
  },
];

const Sidebar = () => {
    
  return (
    <div className="h-[90vh] w-[15rem] bg-[#494D7D] m-10 rounded-xl">
      
      <img src={pfp} alt="profile-img" className=" w-32 ml-auto mr-auto mb-20 pt-12 " />
      
      <div className="  w-[15rem] h-auto flex flex-col items-center">
        {navData.map((val, i) => {
          return (
            <Link
              key={i}
              to={val.path}
              className="hover:text-[#cef151] text-white m-4 bg-[#DCDCDC] w-[15rem] text-center bg-opacity-[53%] h-10 flex items-center justify-center font-semibold"
            >
              {val.title}
            </Link>
          );
        })}
      </div>
      <Outlet/>
    </div>
  );
};

export default Sidebar;
