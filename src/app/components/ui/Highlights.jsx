import React from "react";

export default function Highlights({highlight}) {
  return (
    <div className="sm:w-[48%] md:w-[calc(100%/3)]  flex flex-col items-center mb-10">
      <div className="rounded-full border-b border-gray-300 w-10 h-10 flex justify-center items-center mb-4 text-[#4539ca] text-lg shadow-sm">
        {highlight.icon}
      </div>
      <div className="font-semibold text-lg mb-2">{highlight.title}</div>
      <p className="text-black/70 text-center max-w-sm">
        {highlight.description}
      </p>
    </div>
  );
}
