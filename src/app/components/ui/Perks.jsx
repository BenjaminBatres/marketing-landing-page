import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function Perks({ perk }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex justify-center items-center w-6 h-6 text-[#4539ca] bg-[#ecf0ff] rounded-full">
        <FaCheck className="w-10" />
      </div>
      <div className="text-black/70">{perk}</div>
    </div>
  );
}
