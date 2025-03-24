"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

function Navbar() {
 

  return (
    <nav className="bg-transparent">
      <div className=" flex flex-wrap items-center justify-between ">
    
        <div className="text-[18px] md:text-[25px] lg:text-[32px] text-white font-semibold whitespace-nowrap  lg:pl-15">
          Vaccination.ng
        </div>

        <Sheet >
          <SheetTrigger asChild>
            <button className="p-2 w-10 h-10 text-white bg-white/50 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            {/* Your mobile menu content here */}
            <nav>
              <a href="/" className="block py-2">
                Home
              </a>
              <a href="/about" className="block py-2">
                About
              </a>
              <a href="/contact" className="block py-2">
                Contact
              </a>
              <a href="/contact" className="block py-2">
                Check status
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:visible lg:flex lg:flex-row lg:justify-around lg:items-center lg:gap-10">
          <div className="text-white/70 text-[24px] cursor-pointer hover:text-white ">Home</div>
          <div className="text-white/70  text-[24px] cursor-pointer  hover:text-white ">Services</div>
          <div className="text-white/70  text-[24px] cursor-pointer  hover:text-white ">Schedule</div>
          
          <div className="text-white/70  text-[24px] cursor-pointer  hover:text-white ">Contact us</div>
        </div>

        <div className="hidden lg:block">
          <button className=" text-[#17C2EC] lg:text-2xl font-extrabold shadow-md shadow-[#00000040]  bg-[#C4C4C41A] lg:p-[20px] lg:mr-20 rounded-3xl">
            Check Status
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
