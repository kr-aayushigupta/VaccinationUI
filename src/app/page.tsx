import Image from "next/image";
import Section1 from "@/mycomponents/section1/Section1";
import Sponsor from "@/mycomponents/sponsors/Sponsor"
import Section2 from "@/mycomponents/section2/Section2"
export default function Home() {
  return (
    <div>
      <Section1 />
      <Sponsor/>
      <Section2/>
    </div>
  );
}
