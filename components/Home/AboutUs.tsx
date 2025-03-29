//import React from 'react'
"use client";
import Image from "next/image";
import About from "../../public/new/About.png";
import About2 from "../../public/new/About2.png";
import About3 from "../../public/new/About3.png";
import Link from "next/link";
// import About from "../public/new/PT.png";
// import New from "../public/new/Newton.png";
// import Mem from "../public/new/Member.png";
// import TTCBACK from "../public/new/TTCBACK.png";

function AboutUs() {
  return (
    <section
      style={{ backgroundColor: "rgba(248,245,245,0.70)" }}
      className={`flex flex-col md:flex-row items-center justify-between gap-10 px-[20px] md:px-[60px] py-12`}
    >
      {/* Left Image Section */}
      <div className={`relative flex items-center justify-center`}>
        <Image
          src={About}
          alt="Triumphant Community"
          width={467}
          height={616}
          className={`rounded-xl shadow-lg`}
        />
      </div>

      {/* <div className="flex items-center justify-center gap-4">
       
        <div className="w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-lg md:block hidden">
          <Image
            src={About2} 
            alt="Speaker 1"
            width={250}
            height={350}
            className="object-cover w-full h-full md:block hidden"
          />
        </div>

    
        <div className="w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={About} 
            alt="Speaker 2"
            width={280}
            height={380}
            className="object-cover w-full h-full"
          />
        </div>

       
        <div className="w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-lg md:block hidden">
          <Image
            src={About3} 
            alt="Speaker 3"
            width={250}
            height={350}
            className="object-cover w-full h-full md:block hidden"
          />
        </div>
      </div> */}

      {/* Right Text Section */}
      <div className={`md:w-[50%]`}>
        <h2
          className={`md:text-[48px] md:text-start text-[20px] text-center font-bold text-[#231F60] mb-4`}
        >
          ABOUT US
        </h2>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] w-full text-justify`}
        >
          The Triumphant Community exists to build an ever-growing JESUS
          community globally by reaching and influencing everyday people with
          the Kingdom Culture, empowering them to transform every sphere of
          society.
        </p>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}
        >
          We replicate heaven here on earth by the adherent communion with the
          word of God and fellowship of the holy spirit.
        </p>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}
        >
          At The Triumphant Community, we believe in the transformative power of
          faith, a faith that leads to signs, miracles, and wonders. We are not
          just a church; we are a family large enough to accommodate you and
          small enough to identify you. Whether you are just beginning your
          journey of faith or seeking a deeper connection with God, you will
          find a home here.
        </p>
        <Link href="/about">
          <button className="bg-[#231F60] text-white md:w-[148px] h-[48px] p-[10px] rounded-[15px] flex items-center justify-center w-full">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AboutUs;
