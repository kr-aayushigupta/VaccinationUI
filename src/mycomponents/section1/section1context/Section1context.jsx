import React from "react";
import Image from "next/image";
function Section1context() {
  return (
    <div className="flex flex-col w-[100%] lg:flex-row gap-4">

      <div className="lg:w-[50%] flex flex-col  mx-[20px]  ml-20 ">
        <div className="text-[#17C2EC] text-[24px] font-semibold mt-[101px]">
          Get Vaccinated. Boost your Immune System
        </div>
        <div className="text-white text-[48px] font-[800] mt-[40px] text-wrap">
          COVID-19 Vaccination Got Easier With,
          <div className="text-[#17C2EC] text-[48px] font-[800] text-wrap">
            Vaccination.ng
          </div>
        </div>

        <div className="text-[#FFFFFFB2] text-[24px] font-semibold mt-[50px]">
          Vaccination.ng will help you find the nearest centre for vaccination,
          in all 36 states in Nigeria.
        </div>

        <div className="flex flex-row gap-6 mt-[50px]">
          <button className="bg-[#17C2EC] text-white text-2xl font-extrabold shadow-md shadow-[#00000040] p-[20px] rounded-3xl">
            Get Vaccine
          </button>

          <button className="border-[#17C2EC] text-white border-2 text-2xl font-extrabold shadow-md shadow-[#00000040] p-[20px] rounded-3xl">
            Help Centre
          </button>
        </div>
      </div>

      {/* Right half of components =================================================================================== */}

      <div className="lg:w-[50%] flex flex-row-reverse justify-center mt-[100px] ">
        <div className="rounded-4xl bg-[#17C2EC] w-[532.13px] relative flex items-center">
          <Image
            alt="Covid Vaccine"
            src="/CovidVaccine.png"
            width={532.13}
            height={571}
            className="rounded-4xl"
          />

          <div className="rounded-2xl bg-white w-[100px] h-[100px] absolute flex justify-center items-center left-[-50px]">
            <Image
              alt="doctor"
              src="/Doctor.png"
              width={100}
              height={100}
              className="object-cover "
            ></Image>
          </div>

          <div className="rounded-2xl bg-white w-[100px] h-[100px] absolute right-[-50px]   flex justify-center items-center">
            <Image
              alt="doctor"
              src="/CoronaVirus.png"
              width={800}
              height={800}
              className="object-cover "
            ></Image>
          </div>

          <div className="rounded-2xl bg-[#C4C4C433] w-[374px] h-[100px] absolute bottom-[-50px] left-[-50px] p-[10px] flex flex-row justify-evenly items-center">

            <div className="flex flex-row rounded-xl">
              <Image
                alt="doctor"
                src="/Doctor1.png"
                width={60}
                height={60}
                className="object-cover rounded-xl"
              ></Image>
              <Image
                alt="doctor"
                src="/Doctor2.png"
                width={60}
                height={60}
                className="object-cover rounded-xl"
              ></Image>
              <Image
                alt="doctor"
                src="/Doctor3.png"
                width={60}
                height={60}
                className="object-cover rounded-xl"
              ></Image>

              
            </div>
            <div className="flex flex-col ">
             <div className="text-white text-[24px] font-bold">20+</div>
             <div className="text-[#17C2EC] text-[24px] font-bold">Specialists</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1context;
