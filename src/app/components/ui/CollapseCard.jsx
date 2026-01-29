import React, { useState } from "react";

export default function CollapsedCard({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="overflow-hidden mb-2 border-b border-gray-300 ">
      <div
        className="py-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="font-semibold max-w-70 sm:max-w-full sm:text-lg">
          {title}
        </div>
        {isCollapsed ? (
          <i className="bx  bx-plus-circle text-2xl text-gray-400"></i>
        ) : (
          <i className="bx  bx-minus-circle text-2xl text-gray-400"></i>
        )}
      </div>
      <div
        className="relative hidden sm:block overflow-hidden transition-all duration-400 text-black/70 max-w-330"
        style={{ height: isCollapsed ? 0 : 72 }}
      >
        {children}
      </div>
      <div
        className={`relative sm:hidden overflow-hidden transition-all duration-400 text-black/70 text-sm sm:text-base max-w-sm sm:max-w-330 ${isCollapsed ? "h-0" : "h-30"}`}
      >
        {children}
      </div>
    </div>
  );
}
