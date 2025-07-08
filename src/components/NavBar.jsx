import React from "react";
import eye from "../assets/images/eye.png";
import userImg from "../assets/images/navbar.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-10 py-3 shadow-md bg-white">
      <div className="flex items-center gap-5 ml-20">
        <img src={eye} alt="NFTsee Logo" className="h-10 w-10" />
        <span className="text-xl font-bold ">NFTsee</span>
      </div>
      <div className="hidden md:flex gap-6 text-gray-700">
        <a href="#" className="hover:text-black">
          Feed
        </a>
        <a href="#" className="hover:text-black">
          Wallet
        </a>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search here..."
          className="border rounded-full px-3 py-1 text-sm w-36 sm:w-48 md:w-60"
        />
        <button className="w-6 h-6 bg-black rounded-full"></button>
        <img src={userImg} alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
