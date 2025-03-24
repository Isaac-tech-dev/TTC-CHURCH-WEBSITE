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
      "Tricom Worship is the Worship arm of the Triumphant community",
    image: "/new/choir.png",
  },
  {
    title: "USHERING DEPT",
    description:
      "Tricom Worship is the Worship arm of the Triumphant community",
    image: "/new/choir.png",
  },
];

const DepartmentCard = ({ title, description, image }: any) => {
  return (
    <div className="w-[360px] h-[464px] rounded-[15px] shadow-lg border border-gray-300">
      <Image
        src={image}
        width={360}
        height={267}
        alt={title}
        className="h-[267px] w-[360px] rounded-t-[15px] object-cover"
        loading="lazy"
        priority={false}
      />
      <div className="bg-[#F7BFBF] h-[197px] rounded-b-[15px] flex flex-col px-[20px] py-[20px]">
        <div className="flex flex-col items-center space-y-[10px] mb-[20px]">
          <span className="text-[24px] text-[#231F60] font-bold">{title}</span>
          <span className="text-[16px] text-[#040404]">{description}</span>
        </div>
        <span className="text-[16px] text-[#F40618] font-medium cursor-pointer">
          See More
        </span>
      </div>
    </div>
  );
};

const Departments = () => {
  return (
    <div
      className={`flex flex-col px-[20px] py-[100px] space-x-5`}
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
      <div className={`flex flex-col space-y-[5px]`}>
        <span className={`md:text-[36px] text-[24px] text-[#231F60] italic`}>
          Explore
        </span>
        <span
          className={`md:text-[48px] text-[28px] text-[#231F60] font-bold md:w-[45%] w-full`}
        >
          OUR MINSTRIES AND DEPARTMENTS
        </span>
      </div>

      {/* DEPARTMENTS */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center w-full`}
      >
        {departments.map((dept, index) => (
          <DepartmentCard key={index} {...dept} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
