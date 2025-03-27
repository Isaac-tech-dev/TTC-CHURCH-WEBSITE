"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ABOUT1 from "../../public/new/about/HeroImg.png";
import ABOUT2 from "../../public/new/about/HeroImg2.png";

const Hero = () => {
  return (
    <div className={`flex items-center justify-center mt-[90px]`}>
      <Image
        src={ABOUT1}
        alt={``}
        width={1000}
        height={1000}
        className={`lg:w-full lg:h-[90%] bg-no-repeat`}
      />
      <div
        className={`absolute flex flex-col items-center justify-center text-center text-white`}
      >
        <span
          className={`text-[#FFF] text-[14px] md:text-[24px] xl:text-[24px] font-bold`}
        >
          A FAMILY LARGE ENOUGH TO
        </span>
        <span
          className={`text-[#FFF] text-[28px] md:text-[48px] xl:text-[72px] font-bold`}
        >
          ACCOMODATE YOU
        </span>

        <span
          className={`text-[#FFF] text-[14px] md:text-[24px] xl:text-[24px] font-bold`}
        >
          AND SMALL ENOUGH TO
        </span>
        <span
          className={`text-[#F40618] text-[28px] md:text-[48px] xl:text-[72px] font-bold`}
        >
          IDENTIFY YOU
        </span>
      </div>
    </div>
  );
};

export default Hero;
