import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import React from "react";

function Section2Top() {
  return (
    <div>
      <Card className="border-0 bg-white/10 md:mx-10  md:p-10 rounded-2xl">
        <CardHeader>
          <CardTitle className="bg-white/5 text-[10px] md:text-[20px] lg:text-[24px] xs:max-lg:mx-auto">Check your COVID-19 result on our Database</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="">
          {/* <p>Card Content</p> */}
          <div className=" flex flex-col lg:flex-row items-center gap-4 rounded-md border-0 p-4">

          <Input className="text-[12px] md:text-[20px] lg:text-[24px] border-[3px] border-white/15 hover:border-[#17C2EC]" placeholder="Your city"></Input>
          <Input className="text-[12px] md:text-[20px] lg:text-[24px] border-[3px] border-white/15 hover:border-[#17C2EC]" placeholder="NIK Number"></Input>
          <Button className="text-[#17C2EC] lg:text-[24px] border-[3px] border-[#17C2EC]">Check</Button>
          
         
        </div>







        </CardContent>
        <CardFooter className="text-wrap px-0">
          <Button className="text-[#17C2EC] bg-white/20 w-full py-2 text-wrap text-[10px] md:text-[14px] lg:text-[24px]">Need a certificate for your COVID-19 result? Please click here</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Section2Top;
