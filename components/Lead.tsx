"use client";
import Image from "next/image";
import PT from "../public/new/PT.png";

const Lead = () => {
  return (
    <section
      className={`flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-[20px] md:px-[60px] py-12 bg-[#F8F5F5]`}
    >
      {/* Left Image Section */}
      <div className={`relative flex items-center justify-center`}>
        <Image
          src={PT} // Replace with the actual image path
          alt="Triumphant Community"
          width={200}
          height={200}
          className={`rounded-xl shadow-lg`}
        />
      </div>

      {/* Right Text Section */}
      <div className={`md:w-[50%]`}>
        <h2
          className={`md:text-[48px] md:text-start text-[20px] text-center font-bold text-[#231F60] mb-4`}
        >
          MEET THE LEAD
        </h2>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}
        >
          <span className={`font-extrabold`}>Pastor Tony Abraham </span>is the
          lead pastor of the triumphant community which is a leading faith
          believing community that aims to see its members victorious in Christ
          and victorious with Christ.
        </p>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}
        >
          Pst. Tony Abraham is a graduate of Economics from Covenant University.
          He went on to obtain a “Master of Business Administration” degree at
          the University of Lagos. His educational background and knack of
          business generally have found expression in a couple of private
          business endeavours of his{" "}
          <span className={`text-[#F41123]`}>read more...</span>
        </p>
        <button
          className={`bg-[#231F60] text-white md:w-[148px] h-[48px] p-[10px] rounded-[15px] flex items-center justify-center w-full`}
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Lead;
