"use client";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="bg-transparent border-gray-200 ">
      <div className=" flex flex-wrap items-center justify-between ">
        {/* Brand Name / Logo */}
        <div className=" self-center text-[32px] text-white font-semibold whitespace-nowrap  pl-15">
          Vaccination.ng
        </div>

        {/* Hamburger Button (Only visible on mobile) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links (Hidden on mobile, visible on larger screens) */}
        <div
          id="navbar-default"
          className={`w-full md:flex md:w-auto transition-all duration-300 flex justify-between items-center gap-40 md:gap-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent   ">
            {["Home", "Services", "Schedule", "Contact us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-2xl text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white hover:text-bold md:p-0 
                    "
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          
        </div>

        <div className="">
          <button className="text-[#17C2EC] text-2xl font-extrabold shadow-md shadow-[#00000040]  bg-[#C4C4C41A] p-[20px] mr-20 rounded-3xl">Check Status</button>
        </div>

       
        
      </div>
    </nav>
  );
}

export default Navbar;
