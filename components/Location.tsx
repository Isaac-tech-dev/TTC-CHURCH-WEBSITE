"use client";

import React from "react";

const Location = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center mt-[10px] py-[20px] space-y-[20px]`}
    >
      <span className={`md:text-[44px] text-[20px] text-[#231F60] font-bold`}>
        LOCATION & SERVICE TIME
      </span>

      <div className={`flex flex-col items-center justify-center`}>
        <span className={`md:text-[24px] text-[18px] font-bold`}>LOCATION</span>
        <span className={`md:text-[18px] text-[12px] w-[65%] font-regular text-center`}>
          Ascon Filling Station, Beside Zenith Bank, Dalemo, Lagos-Abeokuta
          Expressway, Sango.
        </span>
      </div>
      <div className={`flex flex-col items-center justify-center`}>
        <span className={`md:text-[24px] text-[18px] font-bold`}>TIME</span>
        <span className={`md:text-[18px] text-[12px]font-regular`}>9:00am Every Sunday</span>
      </div>
    </div>
  );
};

export default Location;
