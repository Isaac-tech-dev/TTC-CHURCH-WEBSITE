"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import LEAD from "../../public/new/lead/Lead.png";
import LEAD2 from "../../public/new/give/give.png";

const Hero = () => {
  return (
    <div className={`flex items-center justify-center mt-[90px]`}>
      <Image
        src={LEAD2}
        alt={``}
        width={1000}
        height={1000}
        className={`lg:w-full lg:h-[70%] bg-no-repeat`}
      />
      <div
        className={`absolute flex flex-col items-center justify-center text-center text-white`}
      >
        <span
          className={`text-[#FFF] text-[16px] md:text-[18px] xl:text-[32px] font-bold`}
        >
          United Bank Of Africa
        </span>
        <span
          className={`text-[#FFF] text-[28px] md:text-[48px] xl:text-[72px] font-bold`}
        >
          1025003155
        </span>
        <span
          className={`text-[#FFF] text-[12px] md:text-[18px] xl:text-[24px] font-bold`}
        >
          The Triumphant Community
        </span>
      </div>
    </div>
  );
};

export default Hero;
