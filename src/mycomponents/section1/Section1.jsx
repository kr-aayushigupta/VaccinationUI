import React from "react";

import Navbar from "@/mycomponents/section1/navbar/Navbar";
import Section1context from "@/mycomponents/section1/section1context/Section1context"
import Section1bottom from "@/mycomponents/section1/section1bottom/Section1bottom"
function Section1() {
  return (
    <div
      className="bg-cover bg-center  w-screen  "
      style={{ backgroundImage: "url('/Bluebg.jpeg')" }}
    >
  <div className="max-w-[1440px] mx-auto p-6">
      <Navbar/>
      <Section1context/>
      <Section1bottom></Section1bottom>
      </div>
    </div>
  );
}

export default Section1;
