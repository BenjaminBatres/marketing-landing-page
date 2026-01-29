import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const sectionLinks = [
    { link: "#features", label: "Features" },
    { link: "#pricing", label: "Pricing" },
    { link: "#about-us", label: "About us" },
    { link: "#contact", label: "Contact" },
  ];

  const socials = [
    <AiOutlineYoutube />,
    <FaInstagram />,
    <RiFacebookBoxLine />,
    <FiGithub />,
    <BsTwitterX />,
  ];
  return (
    <footer className="pb-10 sm:pb-20 laptop:py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-6 mb-7">
          {sectionLinks.map((section, id) => (
            <Link
              href={section.link}
              key={id}
              className="text-black/70 text-sm sm:text-base font-medium"
            >
              {section.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-6 mb-3">
          {socials.map((social, id) => (
            <div className="text-black/70 text-lg cursor-not-allowed" key={id}>
              {social}
            </div>
          ))}
        </div>
        <div className="text-black text-sm">
          &copy; 2026 Abstractly, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
