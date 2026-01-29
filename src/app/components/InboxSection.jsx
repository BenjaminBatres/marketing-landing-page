import React from "react";
import AbstractImage from "../assets/abstract.jpg";
import Image from "next/image";
import Perks from "./ui/Perks";
export default function InboxSection() {
  const perks = [
    "Exclusive access to new abstract images and collections",
    "Unlock special promotions only for subscribers",
    "Regular doses or artistic inspiration",
  ];
  return (
    <section className="py-10 sm:py-20 px-3">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col laptop:flex-row gap-5 laptop:gap-15">
          <div className="laptop:flex-1/2 laptop:pr-10  laptop:py-20">
            <div className="font-semibold text-4xl sm:text-5xl mb-8 sm:mb-15 laptop:max-w-lg">
              Get the finest curated abstract delivered weekly to your inbox
            </div>
            <ul className="space-y-5">
              {perks.map((perk, id) => (
                <Perks key={id} perk={perk} />
              ))}
            </ul>
            <div className="mt-10 mb-3 flex gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#fafafa] border border-gray-300 px-3 py-2 rounded-sm w-full sm:w-75"
              />

              <button className="bg-[#4539ca] text-gray-200 py-2 px-4 rounded-sm cursor-not-allowed hidden sm:block">
                Subscribe
              </button>
            </div>
            <p className="text-black/70 text-sm">
              We only send you the best! No spam.
            </p>
              <button className="bg-[#4539ca] mt-4 text-gray-200 py-2 rounded-sm cursor-not-allowed w-full sm:hidden">
                Subscribe
              </button>
          </div>
          <div className="flex-1/2">
            <Image src={AbstractImage} alt="" className="rounded-[18px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
