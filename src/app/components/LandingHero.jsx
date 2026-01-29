import Image from "next/image";
import React from "react";
import Prism from "../assets/prism.png";
export default function LandingHero() {
  return (
    <div className="px-3 sm:px-8 laptop:px-20 py-10 md:py-30">
      <div className="max-w-400 mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-[50%] 2xl:w-auto md:py-20 lg:pr-10">
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold mb-4 md:max-w-120">
            Well crafted abstract images
          </h1>
          <p className="text-black/70 mb-12 md:max-w-100">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
          <div className="space-x-6">
            <button className="py-3 px-7 bg-white shadow-md rounded-sm cursor-not-allowed">
              Learn more
            </button>
            <button className="py-3 px-7 text-gray-200 bg-[#4539ca] rounded-sm cursor-not-allowed">
              See pricing
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="bg-[#f2f4f5] rounded-sm">
            <Image src={Prism} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
