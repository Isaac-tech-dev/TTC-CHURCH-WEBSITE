"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
//import Button from "./Button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`flex flex-row items-center justify-between fixed top-0 left-0 w-full z-50 bg-white shadow-md py-[10px] px-[20px]`}>
      {/* Logo */}
      <Link href={"/"}>
        <Image src={"/new/Logo.png"} width={80} height={80} alt={""} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`text-[16px] text-[#231F60] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-[#F40618]`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(true)}
      />

      {/* Mobile Menu (Sliding) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[50%] bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image src="/close.svg" alt="close" width={32} height={32} />
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col mt-16 space-y-6 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`text-[16px] font-medium hover:text-[#F40618]`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
