"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import LEAD from "../../public/new/lead/Lead.png";

const Hero = () => {
  return (
    <div className={`flex items-center justify-center mt-[90px]`}>
      <Image
        src={LEAD}
        alt={``}
        width={1000}
        height={1000}
        className={`lg:w-full lg:h-[70%] bg-no-repeat`}
      />
      <div
        className={`absolute flex flex-col items-center justify-center text-center text-white`}
      >
        <span
          className={`text-[#FFF] text-[28px] md:text-[48px] xl:text-[72px] font-bold`}
        >
          OUR LEAD PASTOR
        </span>
        <span
          className={`text-[#F40618] text-[18px] md:text-[36px] xl:text-[54px] font-bold`}
        >
          Pastor Tony Abraham
        </span>
      </div>
    </div>
  );
};

export default Hero;
