import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "../assets/abstractly.png";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Sidebar({ isOpen, setIsOpen }) {
  const links = [
    { link: "#features", label: "Features" },
    { link: "#pricing", label: "Pricing" },
    { link: "#about-us", label: "About us" },
    { link: "#contact", label: "Contact" },
  ];
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        ref={ref}
        className={`bg-white md:hidden fixed top-0 right-0 w-70 h-full z-20 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between h-20 px-2 items-center border-b border-gray-200">
          <Image src={Logo} alt="logo" width={120} />
          <IoMdClose
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <ul className="p-4 flex flex-col gap-3">
          {links.map((item, id) => (
            <div key={id}>
              <Link
                href={item.link}
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
