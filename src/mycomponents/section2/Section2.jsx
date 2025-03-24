import React from "react";
import Section2Top from "./section2top/Section2Top";

  

function Section2() {
  return (
    <div
      className="bg-cover bg-center w-screen "
      style={{ backgroundImage: "url('/Bluebg.jpeg')" }}
    >
  <div className="max-w-[1440px] mx-auto p-6">
      <Section2Top/>
      </div>
    </div>
  );
}

export default Section2;
