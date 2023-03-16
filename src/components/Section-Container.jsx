import React from "react";

export default function SectionContainer({ children }) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative w-full py-16 px-6 md:px-24 md:p-24 ">
        {children}
      </div>
    </div>
  );
}
