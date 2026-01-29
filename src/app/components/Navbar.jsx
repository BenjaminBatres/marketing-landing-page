import Image from "next/image";
import React from "react";
import Logo from "../assets/abstractly.png";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

export default function Navbar({ setIsOpen }) {
  const links = [
    { link: "#features", label: "Features" },
    { link: "#pricing", label: "Pricing" },
    { link: "#about-us", label: "About us" },
    { link: "#contact", label: "Contact" },
  ];
  return (
    <nav className="flex justify-between items-center h-20 px-8 2xl:px-0 max-w-400 mx-auto">
      <div className="flex justify-between items-center w-full gap-20 xl:gap-30 laptop:w-auto">
        <Image src={Logo} alt="logo" width={120} />
        <ul className="hidden md:flex gap-6 laptop:gap-8">
          {links.map((item) => (
            <Link href={item.link} key={item.label} className="text-black/60">
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="space-x-3 hidden laptop:block">
        <button className="py-2 px-4 bg-white shadow-md rounded-sm cursor-not-allowed">
          Learn more
        </button>
        <button className="py-2 px-4 text-gray-200 bg-[#4539ca] rounded-sm cursor-not-allowed">
          See pricing
        </button>
      </div>
      <IoMdMenu
        onClick={() => setIsOpen(true)}
        className="text-3xl md:hidden"
      />
    </nav>
  );
}
