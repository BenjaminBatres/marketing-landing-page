import React from "react";

export default function Features({ features }) {
  return (
    <>
      {features.map((feature, id) => (
        <div className="flex gap-4" key={id}>
          <div className="h-10 w-20 sm:h-12 sm:w-12 text-xl shadow-sm text-[#4539ca] flex justify-center items-center border-b border-gray-200 rounded-full">
            {feature.icon}
          </div>
          <div>
            <div className="sm:text-lg font-semibold mb-2">{feature.title}</div>
            <p className="text-black/70 max-w-xl text-sm sm:text-base">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
