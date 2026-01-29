import React from "react";
import { FaCheck } from "react-icons/fa6";
import Perks from "./Perks";

export default function PricingTiers({ pricingTier, id }) {
  return (
    <div
      className={`border ${id === 1 ? "laptop:w-[30%] xl:w-[25%] border-2 border-[#4539ca]/70 shadow-lg/30" : "laptop:w-[33%] border-gray-200"} rounded-sm flex flex-col justify-between `}
    >
      {pricingTier.subtitle && (
        <div className="py-4 bg-[#ecf0ff] text-center font-semibold text-[#4539ca] text-xl">
          {pricingTier.subtitle}
        </div>
      )}
      <div className="px-3 py-4 sm:px-6 sm:py-8">
        <div className="text-2xl font-semibold mb-1">{pricingTier.title}</div>
        <p className="text-black/70 max-w-xs mb-8">{pricingTier.description}</p>
        <div className="mb-1">
          <span className="text-4xl sm:text-5xl font-semibold">{pricingTier.price}</span>
          <span>/ month</span>
        </div>
        <div className="text-black/70 mb-6">Billed monthly</div>
        <ul className="space-y-5">
          {pricingTier.perks.map((perk, id) => (
            <Perks key={id} perk={perk} />
          ))}
        </ul>
      </div>
      <div className="px-3 sm:px-6 py-3 sm:py-0 sm:pb-8">
        <button
          className={`font-medium w-full border border-gray-100 shadow-sm rounded-sm py-3 cursor-not-allowed ${id === 1 ? "bg-[#4539ca] text-white" : ""}`}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
