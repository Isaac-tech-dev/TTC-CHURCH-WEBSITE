import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Linkk from "../public/new/link.png";

type FooterProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumn = ({ title, children }: FooterProps) => {
  return (
    <div className={`flex flex-col gap-5`}>
      <h4 className={`bold-18 whitespace-nowrap`}>{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={`flexCenter py-[40px] bg-[#262262]`}>
      <div
        className={`padding-container max-container flex w-full flex-col gap-14`}
      >
        <div
          className={`flex flex-col items-center justify-center space-y-[20px]`}
        >
          <h2
            className={`text-[#fff] md:text-[16px] text-[14px] font-inter-bold`}
          >
            QUICK LINKS
          </h2>
          {/* Links */}
          <div className={`flex flex-row items-center space-x-6`}>
            <div className={`flex flex-row items-center space-x-1`}>
              <Image src={Linkk} alt="" className={`md:block hidden`} />
              <p
                className={`md:text-[13px] text-[10px] font-inter-medium text-[#fff]`}
              >
                Sermons
              </p>
            </div>
            <div className={`flex flex-row items-center space-x-1`}>
              <Image src={Linkk} alt="" className={`md:block hidden`} />
              <p
                className={`md:text-[13px] text-[10px] font-inter-medium text-[#fff]`}
              >
                Give
              </p>
            </div>
            <div className={`flex flex-row items-center space-x-1`}>
              <Image src={Linkk} alt="" className={`md:block hidden`} />
              <p
                className={`md:text-[13px] text-[10px] font-inter-medium text-[#fff]`}
              >
                First Timers
              </p>
            </div>
            <div className={`flex flex-row items-center space-x-1`}>
              <Image src={Linkk} alt="" className={`md:block hidden`} />
              <p
                className={`md:text-[13px] text-[10px] font-inter-medium text-[#fff]`}
              >
                Second Timers
              </p>
            </div>
            <div className={`flex flex-row items-center space-x-1`}>
              <Image src={Linkk} alt="" className={`md:block hidden`} />
              <p
                className={`md:text-[13px] text-[10px] font-inter-medium text-[#fff]`}
              >
                Membership class
              </p>
            </div>
          </div>
        </div>

        {/* LINE */}
        <div
          className={`border`}
          style={{ borderColor: "rgba(255,255,255,0.5)" }}
        />

        {/* SOCIAL LINK */}
        <div className={`flex flex-row items-center justify-between w-full`}>
          <p className={`text-[14px] text-center text-[#FFFFFF]`}>
            Copyright @ 2025
          </p>
          <div className={`flex flex-col`}>
            <ul className={`text-[14px] flex gap-4 text-gray-30`}>
              {SOCIALS.links.map((link) => (
                <Link
                  href={"/"}
                  key={link}
                  className={`md:w-[37px] w-[30px] md:h-[37px] h-[30px] bg-[#FFFFFF] flex items-center justify-center rounded-full`}
                >
                  <Image src={link} alt="logo" width={20} height={20} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
