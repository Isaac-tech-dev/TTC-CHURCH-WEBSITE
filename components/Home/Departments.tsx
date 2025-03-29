// "use client";
import Image from "next/image";
import React from "react";

const departments = [
  {
    title: "TRICOM WORSHIP",
    description:
      "Tricom Worship is the Worship arm of the Triumphant community",
    image: "/new/choir.png",
  },
  {
    title: "MEDIA TEAM",
    description:
      "The Media Team enhances worship through technology, sound, and visuals.",
    image: "/new/media.png",
  },
  {
    title: "USHERING DEPT",
    description: "The Ushering Unit welcomes and guides with warmth and order.",
    image: "/new/ushering.png",
  },
];

const DepartmentCard = ({ title, description, image }: any) => {
  return (
    <div className={`md:w-[360px] h-[464px] rounded-[15px] shadow-lg`}>
      <Image
        src={image}
        width={360}
        height={267}
        alt={title}
        className={`h-[267px] md:w-[360px] w-full rounded-t-[15px] object-cover`}
        loading="lazy"
        priority={false}
      />
      <div
        className={`bg-[#FFF7F7] h-[197px] rounded-b-[15px] flex flex-col px-[20px] py-[20px]`}
      >
        <div className={`flex flex-col items-center space-y-[10px] mb-[20px]`}>
          <span className={`text-[24px] text-[#231F60] font-bold`}>
            {title}
          </span>
          <span className={`text-[16px] text-[#040404]`}>{description}</span>
        </div>
        <span
          className={`text-[16px] text-[#F40618] font-medium cursor-pointer`}
        >
          See More
        </span>
      </div>
    </div>
  );
};

const Departments = () => {
  return (
    <div
      className={`flex flex-col md:px-[60px] px-[20px] md:py-[100px] py-[50px] md:space-x-5`}
      style={{ backgroundColor: "rgba(243,243,243,0.70)" }}
    >
      {/* TOP LEFT */}
      <span
        className={`flex items-end justify-end text-right text-[14px] md:block font-normal`}
      >
        We are devoted to prayer and fasting, exhibiting both the gifts and
        virtues of the Holy Spirit
      </span>

      {/* TOP RIGHT */}
      <div className={`flex flex-col space-y-[5px] mb-[10px]`}>
        <span className={`md:text-[36px] text-[24px] text-[#231F60] italic`}>
          Explore
        </span>
        <span
          className={`md:text-[48px] text-[18px] text-[#231F60] font-bold md:w-full`}
        >
          OUR SERVICE UNITS
        </span>
      </div>

      {/* DEPARTMENTS */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center md:w-full`}
      >
        {departments.map((dept, index) => (
          <DepartmentCard key={index} {...dept} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
