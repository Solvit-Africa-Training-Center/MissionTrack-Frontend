import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const HeadLanding: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full h-20 max-sm:h-15 shadow-sm border-b fixed top-0 left-0 z-50 border-gray-200 px-8 max-sm:px-2 py-6 max-sm:py-0">

      <div className="flex justify-between  max-sm:mt-2 items-center">
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden top-4 left-4 z-50 p-2 rounded-md bg-primaryColor-600 text-black"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
        <div>
          <h1 className="bg-gradient-to-r font-bold text-2xl max-sm:text-2xl  from-[#4D8FFAE5] to-[#11A677E5] text-transparent bg-clip-text">
            Mission Track
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex justify-between gap-10 max-sm:text-sm  max-sm:gap-5">
          <a href="">Home</a>
          <a href="">Request</a>
          <a href="">Track</a>
        </div>

        {/* Sign Up Button */}
        <div className="">
          <button className="bg-[#5056C7] text-white border rounded-md px-[8px] py-1">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-start px-4 py-4 gap-4 z-40">
          <a href="" className="text-gray-800">Home</a>
          <a href="" className="text-gray-800">Request</a>
          <a href="" className="text-gray-800">Track</a>
          
        </div>
      )}
    </header>
  );
};

export default HeadLanding;
