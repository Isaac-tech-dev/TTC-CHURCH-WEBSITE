"use client";
import Image from "next/image";
import React from "react";
import CONFESSION from "../../public/new/about/HeroImg.png";

const Confession = () => {
  return (
    <div className={`flex items-center justify-center relative`}>
      <Image
        src={CONFESSION}
        alt={``}
        width={1000}
        height={1000}
        className={`lg:w-full lg:h-[90%] bg-no-repeat`}
      />

      {/* Text Box */}
      <div
        className={`absolute bg-white p-6 lg:p-8 rounded-lg shadow-lg w-full text-center lg:text-left 
                      left-5 top-1/2 transform -translate-y-1/2 
                      lg:left-10 lg:w-[510px] md:w-[510px]
                      lg:bg-opacity-90 bg-opacity-95 md:block hidden`}
      >
        <h2 className={`mdtext-[28px] font-bold text-black text-center`}>
          OUR <span className={`text-[#FF0909]`}>CONFESSION</span>
        </h2>
        <p className={`text-black md:text-[20px] leading-[35px] mt-3 text-center`}>
          "We are a family, <br />
          We serve God by His Spirit, <br />
          We work miracles, <br />
          We do the impossible, <br />
          In all we do, we triumph! <br />
          Because we are The Triumphant Community, <br />
          Forever Victorious in Christ, Forever Victorious with Christ."
        </p>
      </div>
    </div>
  );
};

export default Confession;
