//import React from 'react'
"use client";
import Image from "next/image";
import About from "../public/new/visionImg.png";
// import About from "../public/new/PT.png";
// import New from "../public/new/Newton.png";
// import Mem from "../public/new/Member.png";
// import TTCBACK from "../public/new/TTCBACK.png";

function AboutUs() {
  return (
    <section className={`flex flex-col md:flex-row items-center justify-between gap-10 px-[20px] md:px-[60px] py-12 bg-[#F8F5F5]`}>
      {/* Left Image Section */}
      <div className={`relative flex items-center justify-center`}>
        <Image
          src={About} // Replace with the actual image path
          alt="Triumphant Community"
          width={350}
          height={350}
          className={`rounded-xl shadow-lg`}
        />
      </div>

      {/* Right Text Section */}
      <div className={`md:w-[50%]`}>
        <h2 className={`md:text-[48px] md:text-start text-[20px] text-center font-bold text-[#231F60] mb-4`}>ABOUT US</h2>
        <p className={`mb-4 md:text-[18px] md:text-justify text-[14px] w-full text-justify`}>
          The Triumphant Community exists to build an ever-growing JESUS
          community globally by reaching and influencing everyday people with
          the Kingdom Culture, empowering them to transform every sphere of
          society.
        </p>
        <p className={`mb-6 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}>
          We replicate heaven here on earth by the adherent communion with the
          word of God and fellowship of the holy spirit.
        </p>
        <button className={`bg-[#231F60] text-white md:w-[148px] h-[48px] p-[10px] rounded-[15px] flex items-center justify-center w-full`}>
          See More
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
