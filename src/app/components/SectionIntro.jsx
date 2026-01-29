import React from "react";

export default function SectionIntro({ title, subtitle, para, paraWidth }) {
  return (
    <>
      <div className="text-[#4539ca] text-center font-semibold text-sm mb-3">
        {title}
      </div>
      <h2 className="text-4xl text-center font-semibold mb-4 sm:mb-2">
        {subtitle}
      </h2>
      <div className="flex justify-center mb-10">
        <p className="text-black/70 text-center" style={{maxWidth: paraWidth}}>
          {para}
        </p>
      </div>
    </>
  );
}
