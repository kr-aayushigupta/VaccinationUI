import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";

function Section1context() {
  return (
    <div className="space-y-4 mt-20 ">
        {/* ======================================================== */}
      <div className="flex flex-row gap-4 ml-10">
        <div className="text-[#17C2EC] bg-[#C4C4C41A] text-3xl font-bold rounded-xl px-2 pt-2">
          <FiClock />
        </div>
        <div className="text-[24px] font-[700] p-2">
          Schedule Your Vaccination
        </div>
      </div>
{/* =================================================================== */}
      <div className="bg-white/10  mx-10  p-10 rounded-t-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row justify-evenly gap-20">


          <div className="flex flex-row gap-4">
            <div className="text-[#17C2EC] bg-[#C4C4C41A] text-4xl font-bold rounded-xl  flex justify-center items-center">
              <FiNavigation />
            </div>
            <div className="flex flex-col">
              <div className="text-white/50 text-[24px]">Location </div>
              <div className="text-white text-[24px]">Ikeja Lagos, Nigeria </div>
            </div>
          </div>


          <div className="flex flex-row gap-4">
            <div className="text-[#17C2EC] bg-[#C4C4C41A] text-4xl font-bold rounded-xl  flex justify-center items-center">
              <FiCalendar />
            </div>
            <div className="flex flex-col">
              <div className="text-white/50 text-[24px]">Date </div>
              <div className="text-white text-[24px]">29 February, 2022 </div>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="text-[#17C2EC] bg-[#C4C4C41A] text-4xl font-bold rounded-xl  flex justify-center items-center" >
              <FiShield />
            </div>
            <div className="flex flex-col">
              <div className="text-white/50 text-[24px]">Vaccine Type </div>
              <div className="text-white text-[24px]">Mordena </div>
            </div>
          </div>

          
          <div >
          <button className="bg-[#17C2EC] text-white text-2xl font-extrabold shadow-md shadow-[#00000040] p-[20px] rounded-3xl w-[100%]">
            Submit
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Section1context;
